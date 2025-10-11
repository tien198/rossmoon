import z from "zod";
import { categorySchema } from "../base/category.zod";

export const categorySchema_DTO = categorySchema

export type CategoryDTO = z.infer<typeof categorySchema_DTO>






//---- nestedCategorySchema_DTO ------------------------------------------------------
export const nestedCategorySchema_DTO = categorySchema_DTO.pick({
    name: true
})

export type NestedCategory = z.infer<typeof nestedCategorySchema_DTO>