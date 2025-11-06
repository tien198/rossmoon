import type { CollectionPart } from "../shared/schema/server/collection.zod";

import { Abortable, Collection, Filter, FindOptions, ObjectId } from "mongodb";
import { collectionsCollection } from "@/db/mongoDbCollections";
import { NestedCategory } from "../shared/schema/server/category.zod";
import { BannerImage } from "../shared/schema/server/bannerImage.zod";
import DocumentAbstract from "../respository/document";



export default class CollectionImp extends DocumentAbstract<CollectionPart> implements CollectionPart {
    static dbCollection = collectionsCollection
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
        super(col)
        this._id = col!._id!
        Object.assign(this, col)
    }




    // Queries
    static find<T = Collection>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        return super.find<T>(filter, findOptions)
    }

    static findOne<T = Collection>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        return super.findOne<T>(filter, findOptions)
    }

    static findById<T = Collection>(id: string | ObjectId) {
        return super.findById<T>(id)
    }

    static updateOne<T = Collection>(filter: Filter<T>, col: Partial<T>) {
        return super.updateOne<T>(filter, col)
    }

    static inserOne<T = Collection>(col: T) {
        return super.inserOne<T>(col)
    }
}
