import { NestedCategory } from "./category"
import { ProductAdditionalInfors, ProductAttributes, ProductMediasArray } from "./product.properties"

export type Product = {
    name: string
    slug: string
    price: number
    description: string

    attributes?: ProductAttributes | null
    medias?: ProductMediasArray | null
    additionalInfors?: ProductAdditionalInfors | null

    category?: NestedCategory | null

    createdAt: Date | string | number
}

export type ProductPart = Partial<Product>


export type NestedProduct = {
    name: string
    price: number
    slug: string
    attributes?: ProductAttributes | null | undefined
}