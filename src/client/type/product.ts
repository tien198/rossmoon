import { Product } from "@/shared/type/product";
import { MediaData } from "@/shared/type/product.properties";

export interface _Product extends Product {
    id?: string
    medias: (MediaData | undefined)[]
}