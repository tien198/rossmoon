import { Product } from "@/shared/type/product";
import { ProductMediaData } from "@/shared/type/product.properties";

export interface _Product extends Product {
    id?: string
    medias: (ProductMediaData | null | undefined)[]
}