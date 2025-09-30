import { ObjectId } from 'mongodb'
import { z } from 'zod'
import { nestedCategorySchema_Server } from './category.zod'
import { productSchema } from '../client/product.zod'



export const productSchema_Server = productSchema.extend({
    _id: z.instanceof(ObjectId).nullish(),
    category: nestedCategorySchema_Server.nullish(),
})

export type Product = z.infer<typeof productSchema_Server>

export type ProductPart = Partial<Product>




export const nestedProductSchema_Server = productSchema_Server.pick({
    _id: true,
    name: true,
    price: true,
    slug: true,
    attributes: true,
})

export type NestedProduct = z.infer<typeof nestedProductSchema_Server>
