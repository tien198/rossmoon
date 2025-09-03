import { VideoSource } from "@/components/Video"
import { CategoryPart } from "@/models/category.zod"
import { ProductPart } from "@/models/product.zod"


interface CategoryWithName extends CategoryPart {
    name: string
}


export type Gallery = {
    title: string
    category: CategoryWithName
    bannerType: 'image' | 'video'
    bannerVideoSources?: VideoSource[]
    desktopBanner?: string
    mobileBanner?: string
    products: ProductWithUrl[]
    galleryUrl: string
}




export interface ProductWithUrl extends ProductPart {
    name: string
    imageUrls: string[]
    productURL: string
}