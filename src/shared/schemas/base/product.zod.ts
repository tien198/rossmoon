import { z } from 'zod'
import { nestedCategorySchema } from './category.zod'
import { productAdditionalInfors, productMediasArraySchema, productAttributesSchema } from './product.properties.zod'
import zDate from '@/shared/zod.date'



export const productSchema = z.object({
    name: z.string(),
    slug: z.string(),
    price: z.number().positive(),
    description: z.string().min(10),

    attributes: productAttributesSchema,
    medias: productMediasArraySchema,
    additionalInfors: productAdditionalInfors,

    category: nestedCategorySchema.nullish(),

    createdAt: zDate(),
})

export type Product = z.infer<typeof productSchema>

export type ProductPart = Partial<Product>







export const nestedProductSchema = productSchema.pick({
    name: true,
    price: true,
    slug: true,
    attributes: true,
})

export type NestedProduct = z.infer<typeof nestedProductSchema>
