import { ObjectId } from "mongodb";
import z from "zod";

export const subCollectionSchema = z.object({
    _id: z.instanceof(ObjectId),
    name: z.string(),
    imageUrl: z.url()
})

export type SubCollection = z.infer<typeof subCollectionSchema>

export type SubCollectionPart = Partial<SubCollection>