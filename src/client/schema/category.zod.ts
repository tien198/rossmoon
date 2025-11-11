import z from "zod";
import { categorySchema } from "@/shared/schema/category.zod";

export const categorySchema_Client = categorySchema.extend({
    id: z.string().nullish()
})
export type Category = z.infer<typeof categorySchema_Client>