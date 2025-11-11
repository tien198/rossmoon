import type { Document } from "mongodb";
import { Collection, ObjectId } from "mongodb";
import { AppDocument } from "./AppDocument";
import AppDocConstructorFactory from "./AppDocumentConstructor.Factory";


export default function AppDocumenFactory<T extends { _id?: ObjectId }>() {
    return class AppDocConstructor extends AppDocConstructorFactory<T>() implements AppDocument<T> {

        constructor(public model: T, public dbCollection: Collection<Document>) {
            super()
        }

        async save() {
            const coppy: Partial<T> = { ...this.model }

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