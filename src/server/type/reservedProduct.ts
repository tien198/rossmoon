import type { Product } from "@/shared/type/product"
import type { ObjectId } from "mongodb"

export interface ReservedProduct
    extends Product {
    _id: ObjectId
    productId: ObjectId
    updatedAt: Date
}