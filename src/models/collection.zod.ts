import { ObjectId } from "mongodb";
import z from "zod";

export const collectionShema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    name: z.string(),
    url: z.string(),
    imageUrl: z.url(),
    releaseDate: z.union([
        z.string(),
        z.number(),
        z.date()
    ])
        .refine(val => {
            switch (typeof val) {
                case 'string': {
                    return !isNaN(Date.parse(val))
                }
                case 'number': {
                    return !isNaN(val)
                }
                default: {
                    return true
                }
            }
        },
            { error: 'invalid date' }
        ),
})

export type Collection = z.infer<typeof collectionShema>

export type CollectionPart = Partial<Collection>