import ProductRespository from "@/server/respository/ProductRespo";
import { Product } from "@/server/schema/product.zod";
import { Pagination } from "@/shared/schema/pagination";

export interface ProductServiceConstructor {

    new(productRespo: ProductRespository<Product>): ProductServiceInstance
}

export interface ProductServiceInstance {
    productRespo: ProductRespository<Product>
    save: (prod: Product) => Promise<Product>
    findBySlug: (slug: string) => Promise<Product>
    pagination: (
        skip?: number, limit?: number
    ) => Promise<Pagination<Product>>
}