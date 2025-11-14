import type { Product } from "@/server/schema/product.zod";
import type ProductDTO from "@/DTO/product";
import type { ProductAdditionalInfors, ProductMediasArray, ProductAttributes } from "@/shared/schema/product.properties";
import type { NestedCategory } from "@/server/schema/category.zod";

import { ObjectId } from "mongodb";



export default class ProductImp implements Product {
    _id?: ObjectId
    name: string
    slug: string
    price: number
    description: string

    attributes?: ProductAttributes | null
    medias?: ProductMediasArray | null
    additionalInfors?: ProductAdditionalInfors | null

    category?: NestedCategory | null

    createdAt: Date | number | string

    constructor(prod?: ProductDTO) {
        this._id = ObjectId.createFromHexString(prod?.id ?? '')
        this.name = prod?.name || ''
        this.slug = prod?.slug || ''
        this.price = prod?.price || 0
        this.description = prod?.description || ''
        this.attributes = prod?.attributes
        this.medias = prod?.medias
        this.additionalInfors = prod?.additionalInfors
        this.category = prod?.category
        this.createdAt = prod?.createdAt || new Date()
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
