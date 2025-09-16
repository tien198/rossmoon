import zDate from "@/shared/zod.date";
import { ObjectId } from "mongodb";
import z from "zod";
import { bannerImageSchema } from "./bannerImage.zod";
import { nestedProductSchema } from "./product.zod";
import { nestedCollectionSchema } from "./collection.zod";





export const magazineFeatureSchema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    title: z.string().nullish(),
    description: z.string().nullish(),
    bannerImage: bannerImageSchema.nullish(),

    products: z.array(nestedProductSchema.nullish()),

    collection: nestedCollectionSchema,
    createdAt: zDate()
})

export type MagazineFeature = z.infer<typeof magazineFeatureSchema>

export type MagazineFeaturePart = Partial<MagazineFeature>