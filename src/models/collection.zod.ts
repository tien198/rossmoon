import { ObjectId } from "mongodb";
import z from "zod";

export const collectionShema = z.object({
    _id: z.instanceof(ObjectId),
    name: z.string(),
    releaseDate: z.string()
        .refine(
            date => !isNaN(Date.parse(date)),
            { error: 'invalid date' }
        ),
})

export type Collection = z.infer<typeof collectionShema>

export type CollectionPart = Partial<Collection>