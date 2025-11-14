import type {ObjectId, FindOptions, Abortable } from "mongodb"
import type { _MagazineFeature } from "@/server/type/magazineFeature"
import type { _BannerImage } from "@/server/type/bannerImage"
import type { _NestedProduct } from "@/server/type/product"
import type { _NestedCollection } from "@/server/type/collection"

import { magazineFeaturesCollection } from "@/server/db/mongoDbCollections"


export default class MagazineFeatureImp implements _MagazineFeature {
    _id?: ObjectId
    title?: string
    description?: string
    bannerImage?: _BannerImage

    products: _NestedProduct[]

    collection: _NestedCollection
    createdAt: Date | string | number

    constructor(feature: _MagazineFeature) {
        this._id = feature._id!
        Object.assign(this, feature)
        this.products = feature.products
        this.collection = feature.collection
        this.createdAt = feature.createdAt
    }

    static findByCollectionSlug<T = _MagazineFeature>(collectionSlug: string, skip?: number, limit?: number, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
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
