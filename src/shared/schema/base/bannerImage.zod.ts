import z from "zod";

export const bannerImageSchema = z.object({
    mobileUrl: z.url().nullish(),
    desktopUrl: z.url().nullish(),
    // if false, half width viewport
    isFullWidth: z.boolean().default(true).nullish()
})


export type BannerImage = z.infer<typeof bannerImageSchema>