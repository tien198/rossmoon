import type { _Product } from "@/server/type/product";
import type { ProductServiceConstructor } from "./productService";
import type { ProductRespo } from "../respository/productRespo.imp";
import type { MediaService } from "./MediaService.imp";
import { MediaData } from "@/shared/type/product.properties";

// import { ProductRespo } from "@/server/respository/ProductRespo";



export default class ProductServiceImp {
    // Singleton ( Constructor Return Overide )
    productRespo: ProductRespo
    mediaServie?: MediaService
    constructor(productRespo: ProductRespo, mediaService?: MediaService) {
        this.productRespo = productRespo
        this.mediaServie = mediaService
    }

    async findById(id: string) {
        return await this.productRespo.findByid(id)
    }

    async findBySlug(slug: string) {
        return await this.productRespo.fin1dBySlug(slug)
    }

    async pagination(skip: number = 0, limit: number = 0) {
        return await this.productRespo.pagination(skip, limit)
    }

    // saving the product if it was passing. Otherwise, save product existed in productRespo
    async save(prod?: _Product) {
        if (prod)
            this.productRespo.model = prod

        if (!this.mediaServie)
            throw new Error('inject initialized mediaService before interact with product\'s file upload !')

        const p = this.productRespo.model!
        const mediasCoppy = [...(p.medias ?? [])]
        let id = 0
        for (const i of mediasCoppy) {
            if (i instanceof File) {
                const pathName = await this.mediaServie?.uploadFile(i)
                mediasCoppy[id] = {
                    type: i.type,
                    url: pathName
                } as MediaData
            }
            ++id
        }
        p.medias = mediasCoppy

        return await this.productRespo.save()
    }


    // Getter and Setter for product
    get product(): _Product | undefined {
        return this.productRespo.model
    }
    set product(prod: _Product) {
        this.productRespo.model = prod
    }
}

ProductServiceImp satisfies ProductServiceConstructor<_Product, ProductRespo>


// const service = new ProductServiceImp(new ProductRespoImp(new ProductImp()))