import ProductDTO from "@/DTO/product"
import { Pagination } from "@/schemas/base/pagination"

// <Whether> is involked in SERVER <or> CLIENT

/**
 * pagination Products
 */
const ORIGIN = process.env.ORIGIN
export async function getProducts(page?: number) {
    const res = await fetch((ORIGIN ?? '') + '/api/admin/products?page=' + (page ?? 1))
    if (!res.ok)
        throw new Error('fail to fetch products')
    return await res.json() as Pagination<ProductDTO>
}

export async function getProduct(id: string) {
    const res = await fetch((ORIGIN ?? '') + '/api/admin/products/' + id)
    if (!res.ok)
        throw new Error('fail to fetch product "' + id + '"')
    return await res.json() as ProductDTO
}

export async function editProduct(prodId: string, formData: FormData, accessToken: string) {
    const res = await fetch(
        process.env.ORIGIN + '/api/admin/products/edit/' + prodId,
        {
            method: 'PUT',
            body: formData,
            headers: {
                'Authorization': accessToken
            }
        }
    )

    if (!res.ok)
        throw new Error('failed to edti product with id: "' + prodId + '"')

    console.log('__________________________')
    console.log('YOU ARE HERE')
    return await res.json()
}