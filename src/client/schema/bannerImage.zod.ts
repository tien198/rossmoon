import z from "zod";
import { bannerImageSchema } from "@/shared/schema/bannerImage.zod";

export const bannerImageSchema_DTO = bannerImageSchema.extend({})


export type BannerImage = z.infer<typeof bannerImageSchema_DTO>