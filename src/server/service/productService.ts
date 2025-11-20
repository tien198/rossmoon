import type { ProductRespositoryInstance } from "@/server/respository/productRespo";
import type { _Product } from "@/server/type/product";
import type { Pagination } from "@/shared/type/pagination";
import type { MediaServiceInstance } from "./MediaService";
import { ReservedProductRespo } from "../respository/reservedProductRespo.imp";

export interface ProductServiceConstructor<T extends _Product, TProdRespo extends ProductRespositoryInstance<T>> {
    // instance:ProductServiceInstance<T, TProdRespo>
    new(
        productRespo: TProdRespo,
        mediaServie?: MediaServiceInstance,
        reservedProductRespo?: ReservedProductRespo
    ): ProductServiceInstance<T, TProdRespo>
}

export interface ProductServiceInstance<T extends _Product, TProdRespo extends ProductRespositoryInstance<T>> {
    _productRespo: TProdRespo

    readonly product?: T
    _mediaServie?: MediaServiceInstance
    _reservedProductRespo?: ReservedProductRespo

    findById: (id: string) => Promise<T>
    findBySlug: (slug: string) => Promise<T>
    pagination: (
        skip?: number, limit?: number
    ) => Promise<Pagination<T>>
    save: (prod: T) => Promise<T>
}