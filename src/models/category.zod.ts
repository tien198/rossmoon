import { ObjectId } from "mongodb";
import z from "zod";

export const categorySchema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    name: z.string(),
    slug: z.string(),
})

export type Category = z.infer<typeof categorySchema>

export type CategoryPart = Partial<Category>
