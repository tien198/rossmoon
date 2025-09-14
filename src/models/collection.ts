import type { WithId, DeleteResult, Filter } from "mongodb";
import type { Collection, CollectionPart } from "./collection.zod";

import { ObjectId } from "mongodb";
import { collectionCollection } from "@/services/mongoDbCollections";
import { NestedCategory } from "./category.zod";



export default class CollectionImp implements CollectionPart {
    _id: ObjectId
    name?: string
    slug?: string
    imageUrl?: string
    releaseDate?: string | number | Date
    category?: NestedCategory

    constructor(col?: CollectionPart) {
        this._id = col!._id!
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

    /*
    async addSubCollection(subCol: SubCollection) {
        await collectionCollection.updateOne(
            { _id: this._id },
            {
                $push: {
                    subCollections: {
                        _id: new ObjectId(),
                        name: subCol.name,
                        imageUrl: subCol.imageUrl
                    }
                }
            }
        )
    }
    */

    static async find(skip?: number, limit?: number) {
        let query = collectionCollection.find()
        if (skip)
            query = query.skip(skip)
        if (limit)
            query = query.limit(limit)

        return await query.toArray()
    }

    static async findById(id: string | ObjectId) {
        let query: WithId<CollectionPart> | null = null
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

    static async update(filter: Filter<CollectionPart>, col: CollectionPart) {
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
