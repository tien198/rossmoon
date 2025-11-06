import { NestedCategory } from "@/shared/schema/base/category.zod";
import { ProductMediasArray, ProductAttributes, ProductAdditionalInfors } from "@/shared/schema/base/product.properties.zod";
import { Product as ProdClient } from "@/shared/schema/client/product.zod";
import { Product as ProdServer } from "@/shared/schema/server/product.zod";

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
