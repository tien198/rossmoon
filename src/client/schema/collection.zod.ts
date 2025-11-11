import z from "zod";
import { collectionShema } from "@/shared/schema/collection.zod";

export const collectionShema_DTO = collectionShema.extend({})

export type CollectionDTO = z.infer<typeof collectionShema_DTO>

