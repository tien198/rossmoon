import { ObjectId } from 'mongodb'
import { z } from 'zod'
import { nestedCategorySchema_Server } from './category.zod'
import { productSchema } from '@/shared/schema/product.zod'
import { _NestedProduct, _Product } from '../type/product'



export const productSchema_Server = productSchema.extend({
    _id: z.instanceof(ObjectId).optional(),
    category: nestedCategorySchema_Server.optional(),
}) satisfies z.ZodType<_Product>




export const nestedProductSchema_Server = productSchema_Server.pick({
    _id: true,
    name: true,
    price: true,
    slug: true,
    attributes: true,
}) satisfies z.ZodType<_NestedProduct>