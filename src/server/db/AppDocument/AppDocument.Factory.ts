import type { Document } from "mongodb";
import { Collection, ObjectId } from "mongodb";
import { AppDocument } from "./AppDocument";
import AppDocConstructorFactory from "./AppDocumentConstructor.Factory";


export default function AppDocumenFactory<T extends { _id?: ObjectId }>() {
    return class AppDoc extends AppDocConstructorFactory<T>() implements AppDocument<T> {

        constructor(public dbCollection: Collection<Document>, public model?: T) {
            super()
        }

        async save() {
            if (!this.model) {
                throw Error('Model is undefined. Initialize it before saving.')
            }

            const coppy: T = { ...this.model }

            if (!this.model._id) {
                const insertOneResult = await this.dbCollection.insertOne(coppy)
                this.model._id = insertOneResult.insertedId
                return this.model
            }

            await this.dbCollection.updateOne(
                { _id: this.model._id },
                { $set: { ...coppy } }
            )
            return this.model
        }
    }
}