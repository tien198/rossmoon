import type { CollectionPart } from "../schemas/server/collection.zod";

import { Abortable, Collection, Filter, FindOptions, ObjectId } from "mongodb";
import { collectionsCollection } from "@/models/db/mongoDbCollections";
import { NestedCategory } from "../schemas/server/category.zod";
import { BannerImage } from "../schemas/server/bannerImage.zod";
import DocumentAbstract from "./document";



export default class CollectionImp extends DocumentAbstract<Collection> implements CollectionPart {
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
        super()
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
