import type { WithId, DeleteResult, Filter } from "mongodb";
import type { Collection, CollectionPart } from "./collection.zod";

import { ObjectId } from "mongodb";
import { collectionsCollection } from "@/services/mongoDbCollections";
import { NestedCategory } from "./category.zod";
import { BannerImage } from "./bannerImage.zod";



export default class CollectionImp implements CollectionPart {
    _id: ObjectId
    name?: string
    slug?: string
    bannerImg?: BannerImage
    type?: 'collection' | 'edit'

    category?: NestedCategory
    storyId?: ObjectId
    subCollections?: ObjectId[]


    createdAt?: string | number | Date

    constructor(col?: CollectionPart) {
        this._id = col!._id!
        Object.assign(this, col)
    }

    async save() {
        await collectionsCollection.insertOne(this)
    }

    async update() {
        await collectionsCollection.updateOne(
            { _id: this._id },
            { $set: { ...this } }
        )
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

    static async findFeatures(collectionSlug: string) {
        const features = collectionsCollection.aggregate([
            {
                $match: { slug: collectionSlug }
            },
            {
                $lookup: {
                    from: 'magazineFeatures',
                    localField: '_id',
                    foreignField: 'collectionId',
                    as: 'magazineFeatures'
                }
            }
        ])

        return features
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
