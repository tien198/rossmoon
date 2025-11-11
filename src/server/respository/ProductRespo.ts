import { Pagination } from "@/shared/schema/pagination";
import { ProductPart } from "@/server/schema/product.zod";


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
