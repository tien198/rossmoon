import { ProductRespositoryInstance } from "@/server/respository/ProductRespo";
import { Product } from "@/server/schema/product.zod";
import { Pagination } from "@/shared/schema/pagination";

export interface ProductServiceConstructor<T extends Product, TProdRespo extends ProductRespositoryInstance> {
    // instance:ProductServiceInstance<T, TProdRespo>
    new(productRespo: TProdRespo): ProductServiceInstance<T, TProdRespo>
}

export interface ProductServiceInstance<T extends Product, TProdRespo extends ProductRespositoryInstance> {
    productRespo: TProdRespo
    // save: (prod: T) => Promise<T>
    findBySlug: (slug: string) => Promise<T>
    pagination: (
        skip?: number, limit?: number
    ) => Promise<Pagination<T>>
}