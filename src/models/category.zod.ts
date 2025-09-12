import { ObjectId } from "mongodb";
import z from "zod";

export const categorySchema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    name: z.string(),
    slug: z.string(),
    // category seperate 2 types, this feild specify the type of category
    type: z.enum(['collection', 'product'])
})

export type Category = z.infer<typeof categorySchema>

export type CategoryPart = Partial<Category>


//---- previewCategorySchema ------------------------------------------------------
export const previewCategorySchema = categorySchema.pick({
    _id: true,
    name: true
})

export type PreviewCategory = z.infer<typeof previewCategorySchema>