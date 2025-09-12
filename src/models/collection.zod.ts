import zDate from "@/shared/zod.date";
import { ObjectId } from "mongodb";
import z from "zod";
import { previewCategorySchema } from "./category.zod";

export const collectionShema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    name: z.string(),
    slug: z.string(),
    imageUrl: z.url().nullish(),
    releaseDate: zDate(),
    category: previewCategorySchema.nullish(),
    storyId: z.instanceof(ObjectId).nullish(),
})

export type Collection = z.infer<typeof collectionShema>

export type CollectionPart = Partial<Collection>