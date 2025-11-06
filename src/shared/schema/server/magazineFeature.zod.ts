import { ObjectId } from "mongodb";
import z from "zod";
import { nestedCollectionSchema_Server } from "./collection.zod";
import { nestedProductSchema_Server } from "./product.zod";
import { bannerImageSchema_Server } from "./bannerImage.zod";
import { magazineFeatureSchema } from "../base/magazineFeature.zod";





export const magazineFeatureSchema_Server = magazineFeatureSchema.extend({
    _id: z.instanceof(ObjectId).nullish(),
    
    bannerImage: bannerImageSchema_Server.nullish(),
    products: z.array(nestedProductSchema_Server),
    collection: nestedCollectionSchema_Server,
})

export type MagazineFeature = z.infer<typeof magazineFeatureSchema_Server>

export type MagazineFeaturePart = Partial<MagazineFeature>