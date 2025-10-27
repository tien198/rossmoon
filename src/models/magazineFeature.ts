import type { Filter, FindOptions, Abortable } from "mongodb"
import { ObjectId } from "mongodb"
import { magazineFeaturesCollection } from "@/models/db/mongoDbCollections"

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

    static findByCollectionSlug<T = MagazineFeature>(collectionSlug: string, skip?: number, limit?: number, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        let query = magazineFeaturesCollection.find(
            { 'collection.slug': collectionSlug },
            { projection: findOptions }
        )
        if (skip)
            query = query.skip(skip)
        if (limit)
            query = query.limit(limit)
        return query.toArray()
    }




    // Queries
    static find<T = MagazineFeature>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        return super.find<T>(filter, findOptions)
    }

    static findOne<T = MagazineFeature>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        return super.findOne<T>(filter, findOptions)
    }

    static findById<T = MagazineFeature>(id: string | ObjectId) {
        return super.findById<T>(id)
    }

    static updateOne<T = MagazineFeature>(filter: Filter<T>, col: Partial<T>) {
        return super.updateOne<T>(filter, col)
    }

    static inserOne<T = MagazineFeature>(col: T) {
        return super.inserOne<T>(col)
    }
}
