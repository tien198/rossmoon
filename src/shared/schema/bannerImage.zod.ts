import z from "zod";
import { BannerImage } from "../type/bannerImage";

export const bannerImageSchema = z.object({
    mobileUrl: z.url().optional(),
    desktopUrl: z.url().optional(),
    // if false, half width viewport
    isFullWidth: z.boolean().default(true).optional()
}) satisfies z.ZodType<BannerImage>