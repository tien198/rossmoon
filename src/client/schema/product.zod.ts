import type { _Product } from '../type/product'

import { z } from 'zod'
import { productSchema } from '@/shared/schema/product.zod'
import { prodMediaDataSchema } from '@/shared/schema/product.properties.zod'



export const productSchema_Client = productSchema.omit({
    medias: true
}).extend({
    id: z.string().optional(),
    medias: z.array(
        prodMediaDataSchema.optional()
    )
}) satisfies z.ZodType<_Product>