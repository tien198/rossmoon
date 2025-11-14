import type { ProductRespositoryInstance } from "@/server/respository/ProductRespo";
import type { _Product } from "@/server/type/product";
import type { Pagination } from "@/shared/type/pagination";

export interface ProductServiceConstructor<T extends _Product, TProdRespo extends ProductRespositoryInstance<T>> {
    // instance:ProductServiceInstance<T, TProdRespo>
    new(productRespo: TProdRespo): ProductServiceInstance<T, TProdRespo>
}

export interface ProductServiceInstance<T extends _Product, TProdRespo extends ProductRespositoryInstance<T>> {
    productRespo: TProdRespo
    readonly product: T | null
    findById: (id: string) => Promise<T>
    findBySlug: (slug: string) => Promise<T>
    pagination: (
        skip?: number, limit?: number
    ) => Promise<Pagination<T>>
    save: (prod: T) => Promise<T>
}