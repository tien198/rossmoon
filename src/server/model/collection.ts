import type { ObjectId } from "mongodb";
import type { _CollectionPart } from "@/server/type/collection";
import type { _NestedCategory } from "@/server/type/category";
import type { _BannerImage } from "@/server/type/bannerImage";



export default class CollectionImp implements _CollectionPart {

    _id: ObjectId
    name?: string
    slug?: string
    type?: 'collection' | 'edit'
    bannerImage?: _BannerImage

    category?: _NestedCategory
    storyId?: ObjectId
    subCollections?: ObjectId[]

    createdAt?: string | number | Date

    constructor(col: _CollectionPart) {
        this._id = col!._id!
        Object.assign(this, col)
    }
}
