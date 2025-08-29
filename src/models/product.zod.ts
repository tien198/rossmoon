import { ObjectId } from 'mongodb'
import { z } from 'zod'

export const productSchema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    name: z.string(),
    imageUrl: z.url(),
    price: z.number().positive(),
    description: z.string().min(10),
    // 16 x 27 x 16 cm ( Chiều dài x Chiều cao x Chiều rộng )
    dimensions: z.string(),
    /* List of detail features
     [ 
        "Màu xám/vàng", "Chất liệu Monogram Glow Canvas", "Lớp lót bằng da bò", "4 khe đựng thẻ", "Ngăn phụ", "2 ngăn mở" 
    ]     */
    features: z.array(z.string()),
    // "Sản phẩm được sản xuất tại Pháp, Tây Ban Nha, Ý hoặc Mỹ."
    origin: z.string().nullish(),
    // "Lưu ý: Vui lòng đọc kỹ hướng dẫn sử dụng"
    notice: z.string().nullish(),
    sustainability: z.string().nullish(),
    productCare: z.string().nullish()

})

export type Product = z.infer<typeof productSchema>

export type ProductPart = Partial<Product>