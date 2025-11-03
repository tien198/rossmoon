import { NestedCategory } from "@/shared/schemas/base/category.zod";
import { ProductMediasArray, ProductAttributes, ProductAdditionalInfors } from "@/shared/schemas/base/product.properties.zod";
import { Product as ProdClient } from "@/shared/schemas/client/product.zod";
import { Product as ProdServer } from "@/shared/schemas/server/product.zod";

export default class ProductDTO implements Partial<ProdClient> {
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
