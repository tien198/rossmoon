import z from "zod";
import { magazineFeatureSchema } from "@/shared/schema/magazineFeature.zod";



export const magazineFeatureSchema_DTO =magazineFeatureSchema.extend({})

export type MagazineFeatureDTO = z.infer<typeof magazineFeatureSchema_DTO>
