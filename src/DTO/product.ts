import { NestedCategory } from "@/schemas/base/category.zod";
import { MediasArray, ProductAttributes } from "@/schemas/base/product.properties.zod";
import { Product as ProdClient } from "@/schemas/client/product.zod";
import { Product as ProdServer } from "@/schemas/server/product.zod";

export default class ProductDTO implements Partial<ProdClient> {
    id: string

    name?: string
    slug?: string
    price?: number
    description?: string

    attributes?: ProductAttributes
    medias?: MediasArray

    features?: string[]
    origin?: string
    notice?: string
    sustainability?: string
    productCare?: string

    category?: NestedCategory

    createdAt?: Date


    constructor(prod: ProdServer) {
        const shalow = { ...prod }
        this.id = shalow._id?.toString() || ''
        delete shalow._id
        Object.assign(this, prod)
    }

}
