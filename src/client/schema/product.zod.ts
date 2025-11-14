import { z } from 'zod'
import { productSchema } from '@/shared/schema/product.zod'
import { prodMediaDataSchema } from '@/shared/schema/product.properties.zod'
import { _Product } from '../type/product'



export const productSchema_Client = productSchema.omit({
    medias: true
}).extend({
    id: z.string().optional(),
    medias: z.array(
        prodMediaDataSchema.nullish()
    )
}) satisfies z.ZodType<_Product>

