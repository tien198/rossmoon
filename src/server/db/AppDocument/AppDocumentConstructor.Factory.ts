import type { Abortable, Collection, DeleteResult, Document, Filter, FindCursor, FindOptions, InsertOneResult, OptionalUnlessRequiredId, UpdateFilter, WithId } from "mongodb";
import { ObjectId } from "mongodb";

import { AppDocumentConstructor } from "./AppDocumentConstructor";



export default function AppDocConstructorFactory<T extends { _id?: ObjectId }>(): AppDocumentConstructor<T> {
    return class AppDocConstructor {

        static dbCollection: Collection<T>

        static find(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Partial<Record<keyof T, (0 | 1)>>) {
            return this.dbCollection.find(filter ? filter : {}, findOptions) as FindCursor<T>
        }

        static findOne(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Partial<Record<keyof T, (0 | 1)>>) {
            return this.dbCollection.findOne(filter ? filter : {}, findOptions) as Promise<T | null>
        }

        static findById(id: string | ObjectId, findOptions?: FindOptions & Abortable & Partial<Record<keyof T, (0 | 1)>>) {
            let query: Promise<WithId<T> | null> = Promise.resolve(null)
            switch (typeof id) {
                case 'string': {
                    query = this.dbCollection.findOne({ _id: ObjectId.createFromHexString(id) } as Filter<T>, findOptions)
                    break
                }
                case 'object': {
                    if (id instanceof ObjectId)
                        query = this.dbCollection.findOne({ _id: id } as Filter<T>, findOptions)
                    break
                }
                default: {
                    break
                }
            }
            return query as Promise<WithId<T> | null>
        }

        static updateOne(
            filter: Filter<T>,
            update: UpdateFilter<T> | Document[]
        ) {
            return this.dbCollection.updateOne(
                filter,
                update as UpdateFilter<T> | Document[]
            )
        }

        static deleteById(id: string | ObjectId) {
            let query: Promise<DeleteResult | null> = Promise.resolve(null)
            switch (typeof id) {
                case 'string': {
                    query = this.dbCollection.deleteOne({ _id: ObjectId.createFromHexString(id) } as Filter<T>)
                    break
                }
                case 'object': {
                    if (id instanceof ObjectId)
                        query = this.dbCollection.deleteOne({ _id: id } as Filter<T>)
                    break
                }
                default: {
                    break
                }
            }
            return query
        }


        static insertOne(doc: T) {
            const result = this.dbCollection.insertOne({ ...doc, _id: undefined } as OptionalUnlessRequiredId<T>)
            return result as Promise<InsertOneResult<T>>
        }

    }
}
