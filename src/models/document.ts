import type { Document } from "mongodb";
import { Collection, ObjectId } from "mongodb";




export default abstract class DocumentAbstract {
    abstract dbCollection: Collection<Document>

    abstract _id?: ObjectId

    async save() {
        const coppy: Partial<DocumentAbstract> = { ...this }
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
}
