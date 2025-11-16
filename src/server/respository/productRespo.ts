import type { Pagination } from "@/shared/type/pagination";
import type { _Product } from "@/server/type/product";



export interface ProductRespositoryConstructor<T extends _Product> {
    new(model: T): ProductRespositoryInstance<T>
}

export interface ProductRespositoryInstance<T extends _Product>  {
    findById: (id: string) => Promise<T>
    findBySlug: (slug: string) => Promise<T>
    pagination: (
        skip?: number, limit?: number
    ) => Promise<Pagination<T>>
}
