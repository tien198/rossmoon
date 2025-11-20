import type { _MagazineFeature } from "../type/magazineFeature";

import z from "zod";
import { ObjectId } from "mongodb";
import { nestedCollectionSchema_Server } from "./collection.zod";
import { nestedProductSchema_Server } from "./product.zod";
import { bannerImageSchema_Server } from "./bannerImage.zod";
import { magazineFeatureSchema } from "@/shared/schema/magazineFeature.zod";



export const magazineFeatureSchema_Server = magazineFeatureSchema.extend({
    _id: z.instanceof(ObjectId).optional(),

    bannerImage: bannerImageSchema_Server.optional(),
    products: z.array(nestedProductSchema_Server),
    collection: nestedCollectionSchema_Server,
}) satisfies z.ZodType<_MagazineFeature>