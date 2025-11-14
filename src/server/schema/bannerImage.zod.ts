import type { _BannerImage } from "../type/bannerImage";

import z from "zod";
import { ObjectId } from "mongodb";
import { bannerImageSchema } from "@/shared/schema/bannerImage.zod";

export const bannerImageSchema_Server = bannerImageSchema.extend({
    _id: z.instanceof(ObjectId).optional()
}) satisfies z.ZodType<_BannerImage>;