import type { Product } from "@/shared/type/product";
import type { NestedCategory } from "@/shared/type/category";
import type { _Product as ProdServer } from "@/server/type/product";
import type { ProductAdditionalInfors, ProductAttributes, ProductMediasArray } from "@/shared/type/product.properties";



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
