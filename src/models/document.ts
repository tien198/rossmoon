import type { Document } from "mongodb";
import { Collection, ObjectId } from "mongodb";




export default abstract class DocumentAbstract {
    abstract dbCollection: Collection<Document>

    abstract _id?: ObjectId

    async save() {
        const coppy: Partial<DocumentAbstract> = { ...this }
        delete coppy.dbCollection
        await this.dbCollection.insertOne(coppy)
    }

    async update() {
        const coppy: Partial<DocumentAbstract> = { ...this }
        delete coppy.dbCollection
        await this.dbCollection.updateOne(
            { _id: coppy._id },
            { $set: { ...coppy } }
        )
    }
}
