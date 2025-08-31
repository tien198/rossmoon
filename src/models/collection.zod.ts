import { Gender } from "@/shared/enums/gender";
import zDate from "@/shared/zod.date";
import { ObjectId } from "mongodb";
import z from "zod";

export const collectionShema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    name: z.string(),
    gender: z.enum(Gender),
    url: z.string(),
    imageUrl: z.url(),
    releaseDate: zDate()
})

export type Collection = z.infer<typeof collectionShema>

export type CollectionPart = Partial<Collection>