import { z } from 'zod'
import { nestedCategorySchema } from './category.zod'
import { productAttributesSchema } from './product.attributes.zod'
import zDate from '@/shared/zod.date'



export const productSchema = z.object({
    name: z.string(),
    slug: z.string(),
    price: z.number().positive(),
    description: z.string().min(10),


    attributes: productAttributesSchema,

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

    category: nestedCategorySchema.nullish(),

    createdAt: zDate(),
})

export type Product = z.infer<typeof productSchema>

export type ProductPart = Partial<Product>







export const nestedProductSchema = productSchema.pick({
    name: true,
    price: true,
    slug: true,
    attributes: true,
})

export type NestedProduct = z.infer<typeof nestedProductSchema>
