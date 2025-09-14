import zDate from "@/shared/zod.date";
import { ObjectId } from "mongodb";
import z from "zod";

const bannerImageSchema = z.object({
    mobileUrl: z.url(),
    desktopUrl: z.url(),
    // if false, half width viewport
    isFullWidth: z.boolean().nullish()
})



export const magazineFeatureSchema = z.object({
    _id: z.instanceof(ObjectId),
    title: z.string().nullish(),
    description: z.string().nullish(),
    image: bannerImageSchema.nullish(),

    collectionId: z.instanceof(ObjectId),

    createdAt: zDate()
})

export type MagazineFeature = z.infer<typeof magazineFeatureSchema>

export type MagazineFeaturePart = Partial<MagazineFeature>