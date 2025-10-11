import { z } from 'zod'
import { productSchema } from '../base/product.zod'



export const productSchema_DTO = productSchema.extend({
    id: z.string().nullish()
})

export type ProductDTO = z.infer<typeof productSchema_DTO>








export const nestedProductSchema_DTO = productSchema_DTO.pick({
    name: true,
    price: true,
    slug: true,
    attributes: true,
})

export type NestedProductDTO = z.infer<typeof nestedProductSchema_DTO>
