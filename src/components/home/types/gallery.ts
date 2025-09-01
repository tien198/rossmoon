import { VideoSource } from "@/components/Video"
import { Product } from "@/models/product.zod"

export type Gallery = {
    bannerType: 'image' | 'video'
    bannerVideoSources?: VideoSource[]
    bannerImage?: string
    products: Product & { productURL: string }[]
}