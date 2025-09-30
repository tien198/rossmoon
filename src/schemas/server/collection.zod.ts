import { ObjectId } from "mongodb";
import z from "zod";
import { nestedCategorySchema_Server } from "./category.zod";
import { collectionShema } from "../client/collection.zod";

export const collectionShema_Server = collectionShema.extend({
    _id: z.instanceof(ObjectId).nullish(),
    storyId: z.instanceof(ObjectId).nullish(),
    // if collection hash sub-collections, subCollections was existed
    subCollections: z.array(z.instanceof(ObjectId)).nullish(),
    category: nestedCategorySchema_Server.nullish(),
})

export type Collection = z.infer<typeof collectionShema_Server>

export type CollectionPart = Partial<Collection>





export const nestedCollectionSchema_Server = collectionShema_Server.pick({
    _id: true,
    slug: true
})

export type NestedCollection = z.infer<typeof nestedCollectionSchema_Server>