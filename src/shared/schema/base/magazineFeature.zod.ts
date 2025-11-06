import zDate from "@/shared/zod.date";
import z from "zod";
import { bannerImageSchema } from "./bannerImage.zod";
import { nestedProductSchema } from "./product.zod";
import { nestedCollectionSchema } from "./collection.zod";





export const magazineFeatureSchema = z.object({
    title: z.string().nullish(),
    description: z.string().nullish(),
    bannerImage: bannerImageSchema.nullish(),

    products: z.array(nestedProductSchema),

    collection: nestedCollectionSchema,
    createdAt: zDate()
})

export type MagazineFeature = z.infer<typeof magazineFeatureSchema>

export type MagazineFeaturePart = Partial<MagazineFeature>