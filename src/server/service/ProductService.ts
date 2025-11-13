import { ProductRespositoryInstance } from "@/server/respository/ProductRespo";
import { Product } from "@/server/schema/product.zod";
import { Pagination } from "@/shared/schema/pagination";

export interface ProductServiceConstructor<T extends Product, TProdRespo extends ProductRespositoryInstance<T>> {
    // instance:ProductServiceInstance<T, TProdRespo>
    new(productRespo: TProdRespo): ProductServiceInstance<T, TProdRespo>
}

export interface ProductServiceInstance<T extends Product, TProdRespo extends ProductRespositoryInstance<T>> {
    productRespo: TProdRespo
    findById: (id: string) => Promise<T>
    findBySlug: (slug: string) => Promise<T>
    pagination: (
        skip?: number, limit?: number
    ) => Promise<Pagination<T>>
    save: (prod: T) => Promise<T>
}