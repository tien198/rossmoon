import z from "zod";
import { magazineFeatureSchema } from "../base/magazineFeature.zod";



export const magazineFeatureSchema_DTO =magazineFeatureSchema.extend({})

export type MagazineFeatureDTO = z.infer<typeof magazineFeatureSchema_DTO>
