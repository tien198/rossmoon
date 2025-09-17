import zDate from "@/shared/zod.date";
import { ObjectId } from "mongodb";
import z from "zod";
import { nestedCategorySchema } from "./category.zod";
import { bannerImageSchema } from "./bannerImage.zod";

export const collectionShema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    name: z.string(),
    slug: z.string(),
    bannerImage: bannerImageSchema.nullish(),
    type: z.enum(['collection', 'sub-collection', 'edit']),

    category: nestedCategorySchema.nullish(),
    storyId: z.instanceof(ObjectId).nullish(),
    // if collection hash sub-collections, subCollections was existed
    subCollections: z.array(z.instanceof(ObjectId)).nullish(),

    createdAt: zDate(),
})

export type Collection = z.infer<typeof collectionShema>

export type CollectionPart = Partial<Collection>





export const nestedCollectionSchema = collectionShema.pick({
    _id: true,
    slug: true
})

export type NestedCollection = z.infer<typeof nestedCollectionSchema>