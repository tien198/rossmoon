import type { _Collection, _NestedCollection } from "../type/collection";

import { ObjectId } from "mongodb";
import z from "zod";
import { nestedCategorySchema_Server } from "./category.zod";
import { collectionShema } from "@/shared/schema/collection.zod";

export const collectionShema_Server = collectionShema.extend({
    _id: z.instanceof(ObjectId).optional(),
    storyId: z.instanceof(ObjectId).nullish(),
    // if collection hash sub-collections, subCollections was existed
    subCollections: z.array(z.instanceof(ObjectId)).nullish(),
    category: nestedCategorySchema_Server.nullish(),
}) satisfies z.ZodType<_Collection>;








export const nestedCollectionSchema_Server = collectionShema_Server.pick({
    _id: true,
    slug: true
}) satisfies z.ZodType<_NestedCollection>
