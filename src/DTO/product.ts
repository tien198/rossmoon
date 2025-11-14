import type { Product } from "@/shared/schema/product.zod";
import type { Product as ProdServer } from "@/server/schema/product.zod";
import type { NestedCategory } from "@/shared/schema/category.zod";
import type { ProductMediasArray, ProductAttributes, ProductAdditionalInfors } from "@/shared/schema/product.properties.zod";


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
