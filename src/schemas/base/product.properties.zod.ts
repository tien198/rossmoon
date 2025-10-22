import z from "zod";

export const productAttributesSchema = z.object({
    // 16 x 27 x 16 cm ( Chiều ngang x Chiều cao x Chiều rộng )
    width: z.number().positive().nullish(),
    height: z.number().positive().nullish(),
    depth: z.number().positive().nullish(),
    color: z.string().nullish(),
    material: z.string().nullish()
})
export type ProductAttributes = z.infer<typeof productAttributesSchema>



export const mediaSchema = z.object({
    type: z.enum(['image', 'video']),
    url: z.url()
})
export type Media = z.infer<typeof mediaSchema>



// products's image or video 
export const mediasArraySchema = z.array(
    mediaSchema.nullish()
)
export type MediasArray = z.infer<typeof mediasArraySchema>