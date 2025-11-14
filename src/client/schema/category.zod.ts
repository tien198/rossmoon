import z from "zod";
import { categorySchema } from "@/shared/schema/category.zod";
import { _Category } from "../type/categoty";

export const categorySchema_Client = categorySchema.extend({
    id: z.string().optional()
}) satisfies z.ZodType<_Category>;