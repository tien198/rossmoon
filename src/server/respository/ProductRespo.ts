import { Pagination } from "@/shared/schema/pagination";
import { Product } from "@/server/schema/product.zod";


export default interface ProductRespositoryConstructor<T extends Product> {
    new(model: T): ProductRespositoryInstance
}

interface ProductRespositoryInstance {
    // edit: (prodId: string, updated: Product) => Promise<Product | null>
    findBySlug: (slug: string) => Promise<Product>
    pagination: (
        skip?: number, limit?: number
    ) => Promise<Pagination<Product>>
}
