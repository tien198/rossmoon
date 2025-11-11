import type { CollectionPart } from "../shared/schema/server/collection.zod";

import type { ObjectId } from "mongodb";
import { NestedCategory } from "../shared/schema/server/category.zod";
import { BannerImage } from "../shared/schema/server/bannerImage.zod";



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
