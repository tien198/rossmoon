import type { Abortable, DeleteResult, Document, Filter, FindOptions, InsertOneResult, WithId } from "mongodb";
import { Collection, FindCursor, ObjectId } from "mongodb";




export default abstract class DocumentAbstract<T> {
    abstract dbCollection: Collection<Document>
    static dbCollection: Collection<any>

    abstract _id?: ObjectId

    async save() {
        const coppy: Partial<DocumentAbstract<T>> = { ...this }
        delete coppy.dbCollection

        if (!this._id) {
            return await this.dbCollection.insertOne(coppy)
        }

        const updatedDoc = await this.dbCollection.updateOne(
            { _id: this._id },
            { $set: { ...coppy } }
        )
        return updatedDoc
    }

    static find<T>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Partial<Record<keyof T, (0 | 1)>>) {
        return this.dbCollection.find(filter ? filter : {}, findOptions) as FindCursor<T>
    }

    static findOne<T>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Partial<Record<keyof T, (0 | 1)>>) {
        return this.dbCollection.findOne(filter ? filter : {}, findOptions) as Promise<T | null>
    }

    static findById<T>(id: string | ObjectId, findOptions?: FindOptions & Abortable & Partial<Record<keyof T, (0 | 1)>>) {
        let query: Promise<WithId<T> | null> = new Promise(() => null)
        switch (typeof id) {
            case 'string': {
                query = this.dbCollection.findOne({ _id: ObjectId.createFromHexString(id) }, findOptions)
                break
            }
            case 'object': {
                if (id instanceof ObjectId)
                    query = this.dbCollection.findOne({ _id: id }, findOptions)
                break
            }
            default: {
                break
            }
        }
        return query as Promise<WithId<T> | null>
    }

    static updateOne<T = Document>(filter: Filter<T>, doc: Partial<T>) {
        return this.dbCollection.updateOne(
            { ...filter },
            { ...doc }
        )
    }

    static deleteById(id: string | ObjectId) {
        let query: Promise<DeleteResult | null> = new Promise(() => null)
        switch (typeof id) {
            case 'string': {
                query = this.dbCollection.deleteOne({ _id: ObjectId.createFromHexString(id) })
                break
            }
            case 'object': {
                if (id instanceof ObjectId)
                    query = this.dbCollection.deleteOne({ _id: id })
                break
            }
            default: {
                break
            }
        }
        return query
    }


    static inserOne<T>(doc: T) {
        const result = this.dbCollection.insertOne({ ...doc, _id: undefined })
        return result as Promise<InsertOneResult<T>>
    }

}
