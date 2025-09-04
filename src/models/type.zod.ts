import { ObjectId } from "mongodb";
import z from "zod";

export const typeSchema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    name: z.string(),
})

export type Type = z.infer<typeof typeSchema>


