import type { Product } from "@/shared/schema/product";
import type { Product as ProdServer } from "@/server/schema/product.zod";
import type { ProductAdditionalInfors, ProductAttributes, ProductMediasArray } from "@/shared/schema/product.properties";
import type { NestedCategory } from "@/shared/schema/category";



export default class ProductDTO implements Partial<Product> {
    id: string

    name?: string
    slug?: string
    price?: number
    description?: string

    attributes?: ProductAttributes
    medias?: ProductMediasArray
    additionalInfors?: ProductAdditionalInfors

    category?: NestedCategory

    createdAt?: Date


    constructor(prod: ProdServer) {
        const shalow = { ...prod }
        this.id = shalow._id?.toString() || ''
        delete shalow._id
        Object.assign(this, prod)
    }

}
