import type { _NestedCategory } from "@/server/type/category";
import type ProductDTO from "@/DTO/product";
import type { ProductAdditionalInfors, ProductMediasArray, ProductAttributes } from "@/shared/type/product.properties";
import type { ReservedProduct } from "../type/reservedProduct";

import { ObjectId } from "mongodb";



export default class ReservedProductImp implements ReservedProduct {
    prodId: ObjectId
    name: string
    slug: string
    price: number
    description: string

    attributes?: ProductAttributes
    medias?: ProductMediasArray
    additionalInfors?: ProductAdditionalInfors

    category?: _NestedCategory

    updatedAt: Date;

    constructor(prod?: ProductDTO) {
        this.prodId = ObjectId.createFromHexString(prod?.id ?? '')
        this.name = prod?.name || ''
        this.slug = prod?.slug || ''
        this.price = prod?.price || 0
        this.description = prod?.description || ''
        this.attributes = prod?.attributes
        this.medias = prod?.medias
        this.additionalInfors = prod?.additionalInfors
        this.category = prod?.category
        this.updatedAt = new Date();
    }

    get priceFormatted() {
        const [intPart, decimalPart] = String(this.price).split('.')
        return parseInt(intPart).toLocaleString('vi-VN') + (decimalPart ? (',' + parseInt(decimalPart).toLocaleString('vi-VN')) : '')
    }

    standardizeProduct(prod: ReservedProductImp) {
        const prodCp = { ...prod }
        return prodCp
    }

}