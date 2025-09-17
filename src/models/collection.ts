import type { CollectionPart } from "./collection.zod";

import { Collection, DeleteResult, Filter, ObjectId, WithId } from "mongodb";
import { collectionsCollection } from "@/services/mongoDbCollections";
import { NestedCategory } from "./category.zod";
import { BannerImage } from "./bannerImage.zod";
import DocumentAbstract from "./document";



export default class CollectionImp extends DocumentAbstract implements CollectionPart {
    dbCollection = collectionsCollection


    _id: ObjectId
    name?: string
    slug?: string
    type?: 'collection' | 'edit'
    bannerImage?: BannerImage

    category?: NestedCategory
    storyId?: ObjectId
    subCollections?: ObjectId[]

    createdAt?: string | number | Date

    constructor(col: CollectionPart) {
        super()
        this._id = col!._id!
        Object.assign(this, col)
    }

    static async find(filter?: Filter<CollectionPart>, skip?: number, limit?: number) {
        let query = collectionsCollection.find(filter ? filter : {})
        if (skip)
            query = query.skip(skip)
        if (limit)
            query = query.limit(limit)

        return await query.toArray()
    }

    static async findOne(filter?: Filter<CollectionPart>) {
        return await collectionsCollection.findOne(filter ? filter : {})
    }

    static async findById(id: string | ObjectId) {
        let query: WithId<CollectionPart> | null = null
        switch (typeof id) {
            case 'string': {
                query = await collectionsCollection.findOne({ _id: ObjectId.createFromHexString(id) })
                break
            }
            case 'object': {
                if (id instanceof ObjectId)
                    query = await collectionsCollection.findOne({ _id: id })
                break
            }
            default: {
                break
            }
        }
        return query
    }

    static async update(filter: Filter<CollectionPart>, col: CollectionPart) {
        await collectionsCollection.updateOne(
            { ...filter },
            { $set: { ...col } }
        )
    }

    static async deleteById(id: string | ObjectId) {
        let query: DeleteResult | null = null
        switch (typeof id) {
            case 'string': {
                query = await collectionsCollection.deleteOne({ _id: ObjectId.createFromHexString(id) })
                break
            }
            case 'object': {
                if (id instanceof ObjectId)
                    query = await collectionsCollection.deleteOne({ _id: id })
                break
            }
            default: {
                break
            }
        }
        return query
    }

    static async create(col: Collection) {
        const result = await collectionsCollection.insertOne({ ...col, _id: undefined })
        return result
    }

}
