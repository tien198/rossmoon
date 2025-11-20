import type { ProductRespositoryInstance } from "@/server/respository/productRespo";
import type { _Product } from "@/server/type/product";
import type { Pagination } from "@/shared/type/pagination";
import type ReservedProductServiceImp from "./reservedProductService.imp";
import type MediaServiceImp from "./MediaService.imp";

export interface ProductServiceConstructor<T extends _Product, TProdRespo extends ProductRespositoryInstance<T>> {
    // instance:ProductServiceInstance<T, TProdRespo>
    new(productRespo: TProdRespo, mediaServie?: MediaServiceImp): ProductServiceInstance<T, TProdRespo>
}

export interface ProductServiceInstance<T extends _Product, TProdRespo extends ProductRespositoryInstance<T>> {
    productRespo: TProdRespo

    readonly product?: T
    mediaServie?: MediaServiceImp
    reservedProductService?: ReservedProductServiceImp

    findById: (id: string) => Promise<T>
    findBySlug: (slug: string) => Promise<T>
    pagination: (
        skip?: number, limit?: number
    ) => Promise<Pagination<T>>
    save: (prod: T) => Promise<T>
}