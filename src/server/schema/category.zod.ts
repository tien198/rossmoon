import { ObjectId } from "mongodb";
import z from "zod";
import { categorySchema } from "@/shared/schema/category.zod";

export const categorySchema_Server = categorySchema.extend({
    _id: z.instanceof(ObjectId).nullish(),
})

export type Category = z.infer<typeof categorySchema_Server>

export type CategoryPart = Partial<Category>







//---- nestedCategorySchema ------------------------------------------------------
export const nestedCategorySchema_Server = categorySchema_Server.pick({
    _id: true,
    name: true
})

export type NestedCategory = z.infer<typeof nestedCategorySchema_Server>