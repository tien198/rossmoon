import { VideoSource } from "@/components/Video"
import { CategoryDTO } from "@/schemas/DTO/category.zod"
import { ProductDTO } from "@/schemas/DTO/product.zod"


interface CategoryWithName extends Partial<CategoryDTO> {
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




export interface ProductWithUrl extends Partial<ProductDTO> {
    name: string
    imageUrls: string[]
    productURL: string
}