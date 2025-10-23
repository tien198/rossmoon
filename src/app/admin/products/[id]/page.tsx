'use client'

import { useQuery } from "@tanstack/react-query";
import MediaGallery from "../../comps/MediaGallery";
import ProductFeatures from "../../comps/Product.Features";
import { useParams } from "next/navigation";
import { getProduct } from "@/lib/api/products";
import F from "../../comps/productForm";
/*
const rawProd: ProductDTO = {
  id: "68c84ef65190463d50e43269",
  name: "LV Ombres - bảng phấn mất",
  slug: "LV-Ombres",
  price: 6_500_000,
  description: "cái mô tả này rất chất lượng , Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro natus itaque ab quis eius quasi tempore debitis doloremque impedit eos? Commodi expedita exercitationem necessitatibus ab repellendus laudantium incidunt sit molestias!",
  attributes: {
    color: 'Xanh',
    width: 1,
    height: 1,
    depth: 1
  },
  category: {
    name: 'ffklsdjf'
  },
  medias: [
    {
      type: "image",
      url: "/images/la-beaute-louis-vuitton/ombres/louis-vuitton-lv-ombres---eyeshadow-palette--LYA006_PM2_Front view.avif"
    },
    {
      type: "image",
      url: "/images/la-beaute-louis-vuitton/ombres/louis-vuitton-lv-ombres---eyeshadow-palette--LYA006_PM2_Front view.avif"
    },
    {
      type: "image",
      url: "/images/la-beaute-louis-vuitton/ombres/louis-vuitton-lv-ombres---eyeshadow-palette--LYA006_PM2_Front view.avif"
    }
  ],
  origin: 'viet nam',
  features: [
    'nhacj trẩu vl', ' halo in hall', 'fire the hold'
  ],
  notice: 'cố gắng',
  sustainability: 'làm ăn cho đàng hoàng lão già Trump, laão đểu ma lanh, quái ác.',
  productCare: 'Đồ đắt, giữ cho kỹ',
  createdAt: new Date("2025-08-29T13:54:05.000Z")
}
*/
export default function Product() {
  const params = useParams()
  const prodId = params['id'] as string

  const productQuery = useQuery({
    queryKey: ['products', prodId],
    queryFn: () => getProduct(prodId)
  })

  // Fallback
  if (productQuery.isPending)
    return <div className="h-screen flex justify-center items-center">Loading ... </div>
  else if (productQuery.isError)
    return <div className="h-screen flex justify-center items-center">Fail to load product</div>

  // UI
  const p = productQuery.data
  // const p = rawProd

  return <div className="min-h-screen bg-white text-gray-800 font-sans">
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Bộ sưu tập media */}
      <MediaGallery medias={p.medias} prodName={p.name} />

      {/* Thông tin sản phẩm */}
      <div >
        <h1 className="text-3xl font-bold">{p.name}</h1>
        <F.Input name="Danh mục" value={p.category?.name} disable />
        <F.Input name="Giá" value={p.price?.toLocaleString('vi-VN') + '₫'} className="text-2xl" disable />

        {/* Thuộc tính */}
        <div >
          <F.TextArea name='Mô tả' value={p.description} disable />
          <F.Input name='Màu sắc' value={p.attributes?.color} disable />
          <F.Input
            name='Kích thước (cm)'
            value={
              (p.attributes?.width || '?') + ' x ' +
              (p.attributes?.height || '?') +
              (p.attributes?.depth
                ? (' x ' + p.attributes?.depth)
                : '')
            }
          />
          <F.Input name="Xuất xứ" value={p.origin} disable />
        </div>

        {/* Tính năng */}
        <ProductFeatures features={p.features} />

        {/* Các ghi chú */}
        <div className="text-sm">
          <F.Input name="🔔 Lưu ý" value={p.notice} disable />
          <F.Input name="🌱 Bền vững" value={p.sustainability} disable />
          <F.Input name="🧴 Bảo quản" value={p.productCare} disable />
        </div>
      </div>
    </div>
  </div>
}
