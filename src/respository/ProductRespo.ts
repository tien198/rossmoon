import { Pagination } from "@/shared/schema/base/pagination";
import { ProductPart } from "@/shared/schema/server/product.zod";


export default interface ProductRespositoryConstructor<T extends ProductPart> {
    new(model: T): any
    edit: (prodId: string, updated: T) => Promise<any>
    findBySlug: (slug: string) => Promise<T>
    pagination: (
        skip?: number, limit?: number
    ) => Promise<Pagination<T>>
}
// 
// interface ProductRespositoryInstance {}
