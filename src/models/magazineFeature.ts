import type { Filter, FindOptions, Abortable } from "mongodb"
import { ObjectId } from "mongodb"
import { magazineFeaturesCollection } from "@/services/mongoDbCollections"

import type { MagazineFeature } from "../schemas/server/magazineFeature.zod"
import type { BannerImage } from "../schemas/server/bannerImage.zod"
import type { NestedProduct } from "../schemas/server/product.zod"
import type { NestedCollection } from "../schemas/server/collection.zod"
import DocumentAbstract from "./document"

export default class MagazineFeatureImp extends DocumentAbstract<MagazineFeature> implements MagazineFeature {
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




    // Queries
    static find<T = MagazineFeature>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        return DocumentAbstract.find<T>(filter, findOptions)
    }

    static findOne<T = MagazineFeature>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        return DocumentAbstract.findOne<T>(filter, findOptions)
    }

    static findById<T = MagazineFeature>(id: string | ObjectId) {
        return DocumentAbstract.findById<T>(id)
    }

    static updateOne<T = MagazineFeature>(filter: Filter<T>, col: Partial<T>) {
        return DocumentAbstract.updateOne<T>(filter, col)
    }

    static create<T = MagazineFeature>(col: T) {
        return DocumentAbstract.create<T>(col)
    }
}
