import type { WithId, Document, DeleteResult, Filter } from "mongodb";
import type { Collection, CollectionPart } from "./collection.zod";

import { ObjectId } from "mongodb";
import { getDb } from '@/services/mongoDB'
import { Gender } from "@/shared/enums/gender";


const collectionCollection = getDb().collection('collections')

export default class CollectionImp implements CollectionPart {
    _id?: ObjectId
    name?: string
    gender?: Gender
    url?: string
    imageUrl?: string
    releaseDate?: string | number | Date

    constructor(col?: CollectionPart) {
        Object.assign(this, col)
    }

    async save() {
        await collectionCollection.insertOne(this)
    }

    async update() {
        await collectionCollection.updateOne(
            { _id: this._id },
            { $set: { ...this } }
        )
    }

    static async find(skip?: number, limit?: number) {
        let query = collectionCollection.find()
        if (skip)
            query = query.skip(skip)
        if (limit)
            query = query.limit(limit)

        return await query.toArray()
    }

    static async findById(id: string | ObjectId) {
        let query: WithId<Document> | null = null
        switch (typeof id) {
            case 'string': {
                query = await collectionCollection.findOne({ _id: ObjectId.createFromHexString(id) })
                break
            }
            case 'object': {
                if (id instanceof ObjectId)
                    query = await collectionCollection.findOne({ _id: id })
                break
            }
            default: {
                break
            }
        }
        return query
    }

    static async update(filter: Filter<Document>, col: CollectionPart) {
        await collectionCollection.updateOne(
            { ...filter },
            { $set: { ...col } }
        )
    }

    static async deleteById(id: string | ObjectId) {
        let query: DeleteResult | null = null
        switch (typeof id) {
            case 'string': {
                query = await collectionCollection.deleteOne({ _id: ObjectId.createFromHexString(id) })
                break
            }
            case 'object': {
                if (id instanceof ObjectId)
                    query = await collectionCollection.deleteOne({ _id: id })
                break
            }
            default: {
                break
            }
        }
        return query
    }

    static async create(col: Collection) {
        const result = await collectionCollection.insertOne({ ...col, _id: undefined })
        return result
    }
}
