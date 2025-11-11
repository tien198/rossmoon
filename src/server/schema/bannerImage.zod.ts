import z from "zod";
import { bannerImageSchema } from "@/shared/schema/bannerImage.zod";
import { ObjectId } from "mongodb";

export const bannerImageSchema_Server = bannerImageSchema.extend({
    _id: z.instanceof(ObjectId).nullish()
})


export type BannerImage = z.infer<typeof bannerImageSchema_Server>