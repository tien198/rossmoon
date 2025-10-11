import zDate from "@/shared/zod.date";
import z from "zod";
import { nestedCategorySchema } from "./category.zod";
import { bannerImageSchema } from "./bannerImage.zod";

export const collectionShema = z.object({
    name: z.string(),
    slug: z.string(),
    bannerImage: bannerImageSchema.nullish(),
    type: z.enum(['collection', 'sub-collection', 'edit']),

    category: nestedCategorySchema.nullish(),

    createdAt: zDate(),
})

export type Collection = z.infer<typeof collectionShema>

export type CollectionPart = Partial<Collection>





export const nestedCollectionSchema = collectionShema.pick({
    slug: true
})

export type NestedCollection = z.infer<typeof nestedCollectionSchema>