import zDate from "@/shared/zod.date";
import { ObjectId } from "mongodb";
import z from "zod";

export const collectionShema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    name: z.string(),
    url: z.string(),
    imageUrl: z.url(),
    releaseDate: zDate(),
    categoryId: z.instanceof(ObjectId).nullish()
})

export type Collection = z.infer<typeof collectionShema>

export type CollectionPart = Partial<Collection>