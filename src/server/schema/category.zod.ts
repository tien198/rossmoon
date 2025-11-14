import type { _Category, _NestedCategory } from "../type/category";

import z from "zod";
import { ObjectId } from "mongodb";
import { categorySchema } from "@/shared/schema/category.zod";

export const categorySchema_Server = categorySchema.extend({
    _id: z.instanceof(ObjectId).optional(),
}) satisfies z.ZodType<_Category>;








//---- nestedCategorySchema ------------------------------------------------------
export const nestedCategorySchema_Server = categorySchema_Server.pick({
    _id: true,
    name: true
}) satisfies z.ZodType<_NestedCategory>
