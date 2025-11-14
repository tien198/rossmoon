import z from "zod";
import { ProductAdditionalInfors, ProductAttributes, ProductMedia, ProductMediaData, ProductMediasArray } from "./product.properties";




export const productAttributesSchema = z.object({
    // 16 x 27 x 16 cm ( Chiều ngang x Chiều cao x Chiều rộng )
    width: z.number().positive().nullish(),
    height: z.number().positive().nullish(),
    depth: z.number().positive().nullish(),
    color: z.string().nullish(),
    material: z.string().nullish()
}) satisfies z.ZodType<ProductAttributes>















export const prodMediaDataSchema = z.object({
    type: z.enum(['image', 'video']),
    url: z.url(),
}) satisfies z.ZodType<ProductMediaData>



export const productMediaSchema = z.union([
    prodMediaDataSchema,
    z.file()
]) satisfies z.ZodType<ProductMedia>



// products's image or video 
export const productMediasArraySchema = z.array(
    productMediaSchema.nullish()
) satisfies z.ZodType<ProductMediasArray>













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
}) satisfies z.ZodType<ProductAdditionalInfors>