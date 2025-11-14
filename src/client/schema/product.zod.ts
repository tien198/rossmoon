import { z } from 'zod'
import { productSchema } from '@/shared/schema/product.zod'
import { prodMediaDataSchema } from '@/shared/schema/product.properties.zod'



export const productSchema_Client = productSchema.omit({
    medias: true
}).extend({
    id: z.string().nullish(),
    medias: z.array(
        prodMediaDataSchema.nullish()
    )
})

export type Product = z.infer<typeof productSchema_Client>
