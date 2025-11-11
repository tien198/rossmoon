import { NestedCategory } from "@/shared/schema/category.zod";
import { ProductMediasArray, ProductAttributes, ProductAdditionalInfors } from "@/shared/schema/product.properties.zod";
import { Product as ProdClient } from "@/client/schema/product.zod";
import { Product as ProdServer } from "@/server/schema/product.zod";

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
