import type { ProductAdditionalInfors, ProductAttributes, ProductMedia, MediaData, ProductMediasArray } from "../type/product.properties";

import z from "zod";




export const productAttributesSchema = z.object({
    // 16 x 27 x 16 cm ( Chiều ngang x Chiều cao x Chiều rộng )
    width: z.number().positive().optional(),
    height: z.number().positive().optional(),
    depth: z.number().positive().optional(),
    color: z.string().optional(),
    material: z.string().optional()
}) satisfies z.ZodType<ProductAttributes>















export const prodMediaDataSchema = z.object({
    type: z.enum(['image', 'video']),
    url: z.url(),
}) satisfies z.ZodType<MediaData>



export const productMediaSchema = z.union([
    prodMediaDataSchema,
    z.file()
]) satisfies z.ZodType<ProductMedia>



// products's image or video 
export const productMediasArraySchema = z.array(
    productMediaSchema.optional()
) satisfies z.ZodType<ProductMediasArray>













export const productAdditionalInfors = z.object({
    /* List of detail features
    [ 
        "Màu xám/vàng", "Chất liệu Monogram Glow Canvas", "Lớp lót bằng da bò", "4 khe đựng thẻ", "Ngăn phụ", "2 ngăn mở" 
        ]     */
    features: z.array(z.string()).optional(),
    // "Sản phẩm được sản xuất tại Pháp, Tây Ban Nha, Ý hoặc Mỹ."
    origin: z.string().optional(),
    // "Lưu ý: Vui lòng đọc kỹ hướng dẫn sử dụng"
    notice: z.string().optional(),
    sustainability: z.string().optional(),
    productCare: z.string().optional(),
}) satisfies z.ZodType<ProductAdditionalInfors>