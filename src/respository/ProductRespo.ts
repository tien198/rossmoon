import { Pagination } from "@/shared/schema/base/pagination";
import { Product, ProductPart } from "@/shared/schema/base/product.zod";


export default interface ProductRespositoryConstructor {
    new(model: ProductPart): ProductRespositoryInstance
}

interface ProductRespositoryInstance {
    edit: (prodId: string, updated: Product) => Promise<any>
    findBySlug: (slug: string) => Promise<ProductPart>
    pagination: (
        skip?: number, limit?: number
    ) => Promise<Pagination<Product>>
}