import z from "zod";
import { BannerImage } from "../type/bannerImage";

export const bannerImageSchema = z.object({
    mobileUrl: z.url().nullish(),
    desktopUrl: z.url().nullish(),
    // if false, half width viewport
    isFullWidth: z.boolean().default(true).nullish()
}) satisfies z.ZodType<BannerImage>