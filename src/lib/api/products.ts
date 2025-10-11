import ProductDTO from "@/DTO/product"
import { Pagination } from "@/schemas/base/pagination"

/**
 * pagination Products
 */
export async function getProducts(page?: number) {
    const res = await fetch((process.env.ORIGIN ?? '') + '/api/admin/products?page=' + (page ?? 1))
    if (!res.ok)
        throw new Error('fail to fetch products')
    return await res.json() as Pagination<ProductDTO>
}