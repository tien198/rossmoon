import zDate from "@/shared/zod.date";
import z from "zod";
import { nestedCategorySchema } from "./category.zod";
import { bannerImageSchema } from "./bannerImage.zod";
import { Collection, NestedCollection } from "../type/collection";

export const collectionShema = z.object({
    name: z.string(),
    slug: z.string(),
    bannerImage: bannerImageSchema.nullish(),
    type: z.enum(['collection', 'sub-collection', 'edit']),

    category: nestedCategorySchema.nullish(),

    createdAt: zDate(),
}) satisfies z.ZodType<Collection>







export const nestedCollectionSchema = collectionShema.pick({
    slug: true
}) satisfies z.ZodType<NestedCollection>
