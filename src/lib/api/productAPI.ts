import ProductDTO from "@/DTO/product"
import { Pagination } from "@/shared/schema/base/pagination"

// <Whether> is involked in SERVER <or> CLIENT

const ORIGIN = process.env.ORIGIN

/**
 * get product pagination
 */
export async function getProducts(page?: number) {
    const res = await fetch((ORIGIN ?? '') + '/api/admin/products?page=' + (page ?? 1))
    if (!res.ok)
        throw new Error('fail to fetch products')
    return await res.json() as Pagination<ProductDTO>
}


/**
 * get single product
 */
export async function getProduct(id: string) {
    const res = await fetch((ORIGIN ?? '') + '/api/admin/products/' + id)
    if (!res.ok)
        throw new Error('fail to fetch product "' + id + '"')
    return await res.json() as ProductDTO
}


/**
 * update single product
 */
export async function putProduct(prodId: string, formData: FormData, accessToken: string) {
    const res = await fetch(
        ORIGIN + '/api/admin/products/edit/' + prodId,
        {
            method: 'PUT',
            body: formData,
            headers: {
                'Authorization': accessToken
            }
        }
    )

    if (!res.ok)
        throw new Error('failed to edit product with id: "' + prodId + '"')

    console.log('__________________________')
    console.log('YOU ARE HERE')
    return await res.json()
}