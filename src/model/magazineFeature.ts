import type { FindOptions, Abortable } from "mongodb"
import { ObjectId } from "mongodb"
import { magazineFeaturesCollection } from "@/db/mongoDbCollections"

import type { MagazineFeature } from "../shared/schema/server/magazineFeature.zod"
import type { BannerImage } from "../shared/schema/server/bannerImage.zod"
import type { NestedProduct } from "../shared/schema/server/product.zod"
import type { NestedCollection } from "../shared/schema/server/collection.zod"

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
