import z from "zod";
import { bannerImageSchema } from "../base/bannerImage.zod";

export const bannerImageSchema_DTO = bannerImageSchema.extend({})


export type BannerImage = z.infer<typeof bannerImageSchema_DTO>