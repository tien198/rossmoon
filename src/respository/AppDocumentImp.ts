import type { Document } from "mongodb";
import { Collection, ObjectId } from "mongodb";
import { AppDocumentInstance } from "./AppDocument";
import AppDocStaticFactory from "./AppDocumentStaticImp";


export default abstract class AppDocumentImp<T extends { _id?: ObjectId }> extends AppDocStaticFactory() implements AppDocumentInstance<T> {
    abstract dbCollection: Collection<Document>

    constructor(public model: T) {
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
