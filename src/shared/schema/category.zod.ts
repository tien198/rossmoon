import z from "zod";

export const categorySchema = z.object({
    name: z.string(),
    slug: z.string(),
    // category seperate 2 types, this feild specify the type of category
    type: z.enum(['collection', 'product'])
})

export type Category = z.infer<typeof categorySchema>

export type CategoryPart = Partial<Category>







//---- nestedCategorySchema ------------------------------------------------------
export const nestedCategorySchema = categorySchema.pick({
    name: true
})

export type NestedCategory = z.infer<typeof nestedCategorySchema>