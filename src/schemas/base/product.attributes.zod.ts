import z from "zod";

export const productAttributesSchema = z.object({
    // 16 x 27 x 16 cm ( Chiều ngang x Chiều cao x Chiều rộng )
    width: z.number().positive().nullish(),
    height: z.number().positive().nullish(),
    depth: z.number().positive().nullish(),
    color: z.string().nullish(),
    // products's image or video 
    medias: z.array(
        z.object({
            type: z.enum(['image', 'video']),
            url: z.url()
        }).nullish()
    ),
})

export type ProductAttributes = z.infer<typeof productAttributesSchema>