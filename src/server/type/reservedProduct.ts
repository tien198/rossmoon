import type { Product } from "@/shared/type/product"
import type { ObjectId } from "mongodb"

export interface ReservedProduct
    extends Omit<Product, 'createdAt'> {
    _id?: ObjectId
    prodId: ObjectId
    updatedAt: Date
}