import { Pagination } from "@/shared/schema/pagination";
import { Product } from "@/server/schema/product.zod";


export interface ProductRespositoryConstructor<T extends Product> {
    new(model: T): ProductRespositoryInstance<T>
}

export interface ProductRespositoryInstance<T extends Product>  {
    findById: (id: string) => Promise<T>
    findBySlug: (slug: string) => Promise<T>
    pagination: (
        skip?: number, limit?: number
    ) => Promise<Pagination<T>>
}
