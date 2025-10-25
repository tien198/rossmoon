'use client'

import { useQuery } from "@tanstack/react-query";
import MediaGallery from "../../comps/productForm/MediaGallery";
import ProductFeatures from "../../comps/Product.Features";
import { useParams } from "next/navigation";
import { getProduct } from "@/lib/api/products";
import F from "@/app/admin/comps/productForm";
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
        <F.Inp displayName="Tên SP" name="name" value={p.name} disable/>
        <F.Inp displayName="Danh mục" name="category" value={p.category?.name} disable/>
        <F.Inp displayName="Giá" name="price" type="number" value={p.price?.toString()} suffix="₫" className="text-2xl" disable/>

        {/* Thuộc tính */}
        <F.Text name='Mô tả' value={p.description} />
        <div className="grid grid-cols-2 p-4 rounded-sm">
          <b className="col-start-1 -col-end-1">Kích thước (cm)</b>
          <F.InlineInp displayName="x" name="attributes.width" type="number" value={p.attributes?.width?.toString()} disable />
          <F.InlineInp displayName="y" name="attributes.height" type="number" value={p.attributes?.height?.toString()} disable />
          <F.InlineInp displayName="z" name="attributes.depth" type="number" value={p.attributes?.depth?.toString()} disable />
        </div>
        <F.Inp displayName='Màu sắc' name="attributes.color" value={p.attributes?.color} disable/>
        <F.Inp displayName='Chất liệu' name="attributes.material" value={p.attributes?.material} disable/>

        <F.Inp displayName="Xuất xứ" name="origin" value={p.origin} disable/>

        {/* Tính năng */}
        <ProductFeatures features={p.features} />

        {/* Các ghi chú */}
        <div className="text-sm">
          <F.Inp displayName="🔔 Lưu ý" name="notice" value={p.notice} disable/>
          <F.Inp displayName="🌱 Bền vững" name="sustainability" value={p.sustainability} disable/>
          <F.Inp displayName="🧴 Bảo quản" name="productCare" value={p.productCare} disable/>
        </div>
      </div>
    </div>
  </div>
}
