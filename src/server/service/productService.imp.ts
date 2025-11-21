import type { _Product } from "@/server/type/product";
import type { ProductServiceConstructor } from "./productService";
import type { MediaData } from "@/shared/type/product.properties";
import type { MediaServiceInstance } from "./MediaService";
import type { ProductRespo } from "../respository/productRespo.imp";
import type { ReservedProductRespo } from "../respository/reservedProductRespo.imp";
import type { TransactionService } from "./transactionService";
import { ClientSession } from "mongodb";



export default class ProductServiceImp {
    // Singleton ( Constructor Return Overide )
    _productRespo: ProductRespo
    _mediaServie?: MediaServiceInstance
    _reservedProductRespo?: ReservedProductRespo
    _transactionService?: TransactionService

    constructor(productRespo: ProductRespo, mediaService?: MediaServiceInstance, reservedProductRespo?: ReservedProductRespo, transactionService?: TransactionService) {
        this._productRespo = productRespo
        this._mediaServie = mediaService
        this._reservedProductRespo = reservedProductRespo
        this._transactionService = transactionService
    }

    async findById(id: string) {
        return await this._productRespo.findById(id)
    }

    async findBySlug(slug: string) {
        return await this._productRespo.findBySlug(slug)
    }

    async pagination(skip: number = 0, limit: number = 0) {
        return await this._productRespo.pagination(skip, limit)
    }

    // saving the product if it was passing. Otherwise, save product existed in productRespo
    async save(prod?: _Product) {
        if (prod)
            this._productRespo.model = prod

        if (!this._mediaServie)
            throw new Error('inject initialized mediaService before interact with product\'s file upload !')

        const p = this._productRespo.model!
        const mediasCoppy = [...(p.medias ?? [])]
        let id = 0
        for (const i of mediasCoppy) {
            if (i instanceof File) {
                const pathName = await this._mediaServie?.uploadFile(i)
                mediasCoppy[id] = {
                    type: i.type.split('/')[0],
                    url: '/' + pathName
                } as MediaData
            }
            ++id
        }
        p.medias = mediasCoppy
        const queriesInTransaction = async (session?: ClientSession) => {
            await this._reservedProductRespo?.save(session)
            await this._productRespo.save(session)
        }
        if(!this._transactionService)
            throw new Error('inject initialized transactionService before interact with product\'s transaction !')
        this._transactionService.queriesFnc = queriesInTransaction
        this._transactionService?.execTransaction()
        return this.product!
    }


    // Getter and Setter for product
    get product(): _Product | undefined {
        return this._productRespo.model
    }
    set product(prod: _Product) {
        this._productRespo.model = prod
    }
}

ProductServiceImp satisfies ProductServiceConstructor<_Product, ProductRespo>


// const service = new ProductServiceImp(new ProductRespoImp(new ProductImp()))