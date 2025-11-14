import type { Product } from "@/shared/type/product"
import type { ObjectId } from "mongodb"

export interface _Product
    extends Product {
    _id?: ObjectId
}

export type _ProductPart = Partial<_Product>




export type _NestedProduct = Pick<
    _Product,
    "_id" | "name" | "price" | "slug" | "attributes"
>
