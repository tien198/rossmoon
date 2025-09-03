import { VideoSource } from "@/components/Video"
import { CategoryPart } from "@/models/category.zod"
import { Product } from "@/models/product.zod"

export type Gallery = {
    title: string
    category: CategoryPart
    bannerType: 'image' | 'video'
    bannerVideoSources?: VideoSource[]
    desktopBanner?: string
    mobileBanner?: string
    products: ProductWithUrl[]
}


export type ProductWithUrl =
    Product & { productURL: string }