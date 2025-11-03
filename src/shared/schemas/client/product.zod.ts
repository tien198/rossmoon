import { z } from 'zod'
import { productSchema } from '../base/product.zod'



export const productSchema_Client = productSchema.extend({
    id: z.string().nullish()
})

export type Product = z.infer<typeof productSchema_Client>
