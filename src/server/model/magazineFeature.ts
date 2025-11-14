import type {ObjectId, FindOptions, Abortable } from "mongodb"
import type { MagazineFeature } from "@/server/schema/magazineFeature.zod"
import type { BannerImage } from "@/server/schema/bannerImage.zod"
import type { NestedProduct } from "@/server/schema/product.zod"
import type { NestedCollection } from "@/server/schema/collection.zod"

import { magazineFeaturesCollection } from "@/server/db/mongoDbCollections"


export default class MagazineFeatureImp implements MagazineFeature {
    _id?: ObjectId
    title?: string
    description?: string
    bannerImage?: BannerImage

    products: NestedProduct[]

    collection: NestedCollection
    createdAt: Date | string | number

    constructor(feature: MagazineFeature) {
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
}
