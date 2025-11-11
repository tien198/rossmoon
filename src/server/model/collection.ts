import type { CollectionPart } from "@/server/schema/collection.zod";

import type { ObjectId } from "mongodb";
import { NestedCategory } from "@/server/schema/category.zod";
import { BannerImage } from "@/server/schema/bannerImage.zod";



export default class CollectionImp implements CollectionPart {

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
        this._id = col!._id!
        Object.assign(this, col)
    }
}
