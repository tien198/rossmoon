import zDate from "@/shared/zod.date";
import z from "zod";
import { bannerImageSchema } from "./bannerImage.zod";
import { nestedProductSchema } from "./product.zod";
import { nestedCollectionSchema } from "./collection.zod";
import { MagazineFeature } from "../type/magazineFeature";





export const magazineFeatureSchema = z.object({
    title: z.string().nullish(),
    description: z.string().nullish(),
    bannerImage: bannerImageSchema.nullish(),

    products: z.array(nestedProductSchema),

    collection: nestedCollectionSchema,
    createdAt: zDate()
}) satisfies z.ZodType<MagazineFeature>
