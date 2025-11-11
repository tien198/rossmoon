import type { ProductPart } from "@/server/schema/product.zod";
import type { NestedCategory } from "@/server/schema/category.zod";

import { ObjectId } from "mongodb";
import type { ProductAdditionalInfors, ProductMediasArray, ProductAttributes } from "@/shared/schema/product.properties.zod";



export default class ProductImp implements ProductPart {
    _id?: ObjectId
    name?: string
    slug?: string
    price?: number
    description?: string

    attributes?: ProductAttributes
    medias?: ProductMediasArray
    additionalInfors?: ProductAdditionalInfors

    category?: NestedCategory

    createdAt?: Date

    constructor(prod?: ProductPart) {
        Object.assign(this, prod)
    }

    get priceFormatted() {
        const [intPart, decimalPart] = String(this.price).split('.')
        return parseInt(intPart).toLocaleString('vi-VN') + (decimalPart ? (',' + parseInt(decimalPart).toLocaleString('vi-VN')) : '')
    }

    standardizeProduct(prod: ProductImp) {
        const prodCp = { ...prod }
        return prodCp
    }

}

