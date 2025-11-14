import z from "zod";
import { Category, NestedCategory } from "../type/category";

export const categorySchema = z.object({
    name: z.string(),
    slug: z.string(),
    // category seperate 2 types, this feild specify the type of category
    type: z.enum(['collection', 'product'])
}) satisfies z.ZodType<Category>





//---- nestedCategorySchema ------------------------------------------------------
export const nestedCategorySchema = categorySchema.pick({
    name: true
})satisfies z.ZodType<NestedCategory>
