import type { ClientSession, Document } from "mongodb";
import { Collection, ObjectId } from "mongodb";
import { AppDocument } from "./AppDocument";
import AppDocConstructorFactory from "./AppDocumentConstructor.Factory";


export default function AppDocumenFactory<T extends { _id?: ObjectId }>() {
    return class AppDoc extends AppDocConstructorFactory<T>() implements AppDocument<T> {

        constructor(public dbCollection: Collection<Document>, public model?: T) {
            super()
        }

        // if qurery in a TRANSATION, passing the SESSION that derive transation
        async save(session?: ClientSession) {
            if (!this.model) {
                throw Error('Model is undefined. Initialize it before saving.')
            }

            const coppy: T = { ...this.model }

            if (!this.model._id) {
                const insertOneResult =
                    await this.dbCollection.insertOne(
                        coppy,
                        { session }
                    )
                this.model._id = insertOneResult.insertedId
                return this.model
            }

            await this.dbCollection.updateOne(
                { _id: this.model._id },
                { $set: { ...coppy } },
                { session }
            )
            return this.model
        }

        async findById(id: string, projection?: Partial<Record<keyof T, 0 | 1>>) {
            const query = this.dbCollection.findOne(
                { '_id': ObjectId.createFromHexString(id) },
                { projection }
                // { projection: { products: 1, title: 1, bannerImage: 1 } }
            )
            const prod = await query
            if (!prod)
                throw Error('Not found product with id: "' + id + '"')

            return prod as T
        }
    }
}