import zDate from "@/shared/zod.date";
import { ObjectId } from "mongodb";
import z from "zod";
import { categorySchema } from "./category.zod";
import { subCollectionSchema } from "./subCollection.zod";

export const collectionShema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    name: z.string(),
    slug: z.string(),
    subCollections: z.array(subCollectionSchema),
    releaseDate: zDate(),
    type: z.string(),
    category: categorySchema.nullish()
})

export type Collection = z.infer<typeof collectionShema>

export type CollectionPart = Partial<Collection>