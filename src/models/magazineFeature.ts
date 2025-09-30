import type { WithId, DeleteResult, Filter } from "mongodb"
import { ObjectId } from "mongodb"
import { magazineFeaturesCollection } from "@/services/mongoDbCollections"

import type { MagazineFeature, MagazineFeaturePart } from "../schemas/server/magazineFeature.zod"
import type { BannerImage } from "../schemas/server/bannerImage.zod"
import type { NestedProduct } from "../schemas/server/product.zod"
import type { NestedCollection } from "../schemas/server/collection.zod"
import DocumentAbstract from "./document"

export default class MagazineFeatureImp extends DocumentAbstract implements MagazineFeature {
    dbCollection = magazineFeaturesCollection

    _id?: ObjectId
    title?: string
    description?: string
    bannerImage?: BannerImage

    products: NestedProduct[]

    collection: NestedCollection
    createdAt: Date | string | number

    constructor(feature: MagazineFeature) {
        super()
        this._id = feature._id!
        Object.assign(this, feature)
        this.products = feature.products
        this.collection = feature.collection
        this.createdAt = feature.createdAt
    }

    static async findByCollectionSlug(collectionSlug: string, skip?: number, limit?: number) {
        let query = magazineFeaturesCollection.find(
            { 'collection.slug': collectionSlug },
            { projection: { products: 1, title: 1, bannerImage: 1 } }
        )
        if (skip)
            query = query.skip(skip)
        if (limit)
            query = query.limit(limit)
        return await query.toArray()
    }

    static async find(filter?: Filter<MagazineFeaturePart>, skip?: number, limit?: number) {
        let query = magazineFeaturesCollection.find(filter ?? {})
        if (skip)
            query = query.skip(skip)
        if (limit)
            query = query.limit(limit)
        return await query.toArray()
    }

    static async findOne(filter?: Filter<MagazineFeaturePart>) {
        return await magazineFeaturesCollection.findOne(filter ?? {})
    }

    static async findById(id: string | ObjectId) {
        let query: WithId<MagazineFeaturePart> | null = null
        switch (typeof id) {
            case "string": {
                query = await magazineFeaturesCollection.findOne({ _id: ObjectId.createFromHexString(id) })
                break
            }
            case "object": {
                if (id instanceof ObjectId) {
                    query = await magazineFeaturesCollection.findOne({ _id: id })
                }
                break
            }
            default: break
        }
        return query
    }

    static async deleteById(id: string | ObjectId) {
        let result: DeleteResult | null = null
        switch (typeof id) {
            case "string": {
                result = await magazineFeaturesCollection.deleteOne({ _id: ObjectId.createFromHexString(id) })
                break
            }
            case "object": {
                if (id instanceof ObjectId) {
                    result = await magazineFeaturesCollection.deleteOne({ _id: id })
                }
                break
            }
            default: break
        }
        return result
    }

    static async create(feature: MagazineFeature) {
        const result = await magazineFeaturesCollection.insertOne({ ...feature, _id: undefined })
        return result
    }
}
