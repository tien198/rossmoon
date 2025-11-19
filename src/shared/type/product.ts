import { NestedCategory } from "./category"
import { ProductAdditionalInfors, ProductAttributes, ProductMediasArray } from "./product.properties"

export type Product = {
    name: string
    slug: string
    price: number
    description: string

    attributes?: ProductAttributes
    medias?: ProductMediasArray
    additionalInfors?: ProductAdditionalInfors

    category?: NestedCategory

    createdAt: Date | string | number
}

export type ProductPart = Partial<Product>


export type NestedProduct = {
    name: string
    price: number
    slug: string
    attributes?: ProductAttributes | undefined
}