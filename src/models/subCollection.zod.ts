import { ObjectId } from "mongodb";
import z from "zod";
import { previewProductSchema } from "./product.zod";

const bannerImageSchema = z.object({
    url: z.url(),
    // if false, half width viewport
    isFullWidth: z.boolean().nullish()
})



export const subCollectionSchema = z.object({
    _id: z.instanceof(ObjectId),
    bannerImage: bannerImageSchema.nullish(),
    title: z.string().nullish(),
    description: z.string().nullish(),
    products: z.array(previewProductSchema),

    collectionId: z.instanceof(ObjectId)
})

export type SubCollection = z.infer<typeof subCollectionSchema>

export type SubCollectionPart = Partial<SubCollection>