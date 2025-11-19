import type { NestedProduct, Product } from '../type/product'

import { z } from 'zod'
import { nestedCategorySchema } from './category.zod'
import { productAdditionalInfors, productMediasArraySchema, productAttributesSchema } from './product.properties.zod'
import zDate from '@/shared/zod.date'



export const productSchema = z.object({
    name: z.string(),
    slug: z.string(),
    price: z.number().positive(),
    description: z.string().min(10),

    attributes: productAttributesSchema.optional(),
    medias: productMediasArraySchema.optional(),
    additionalInfors: productAdditionalInfors.optional(),

    category: nestedCategorySchema.optional(),

    createdAt: zDate(),
}) satisfies z.ZodType<Product>







export const nestedProductSchema = productSchema.pick({
    name: true,
    price: true,
    slug: true,
    attributes: true,
}) satisfies z.ZodType<NestedProduct>