import zDate from "@/shared/zod.date";
import { ObjectId } from "mongodb";
import z from "zod";
import { categorySchema } from "./category.zod";

export const collectionShema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    name: z.string(),
    slug: z.string(),
    imageUrl: z.url(),
    releaseDate: zDate(),
    category: categorySchema.nullish()
})

export type Collection = z.infer<typeof collectionShema>

export type CollectionPart = Partial<Collection>