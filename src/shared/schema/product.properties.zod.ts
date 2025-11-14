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


export const prodMediaDataSchema = z.object({
    type: z.enum(['image', 'video']),
    url: z.url(),
})
export type ProductMediaData = z.infer<typeof prodMediaDataSchema>

export const productMediaSchema = z.union([
    prodMediaDataSchema,
    z.file()
])
export type ProductMedia = z.infer<typeof productMediaSchema>



// products's image or video 
export const productMediasArraySchema = z.array(
    productMediaSchema.nullish()
)
export type ProductMediasArray = z.infer<typeof productMediasArraySchema>



export const productAdditionalInfors = z.object({
    /* List of detail features
    [ 
        "Màu xám/vàng", "Chất liệu Monogram Glow Canvas", "Lớp lót bằng da bò", "4 khe đựng thẻ", "Ngăn phụ", "2 ngăn mở" 
        ]     */
    features: z.array(z.string()).nullish(),
    // "Sản phẩm được sản xuất tại Pháp, Tây Ban Nha, Ý hoặc Mỹ."
    origin: z.string().nullish(),
    // "Lưu ý: Vui lòng đọc kỹ hướng dẫn sử dụng"
    notice: z.string().nullish(),
    sustainability: z.string().nullish(),
    productCare: z.string().nullish(),
})

export type ProductAdditionalInfors = z.infer<typeof productAdditionalInfors>