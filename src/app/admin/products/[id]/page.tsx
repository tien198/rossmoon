'use client'

import { useQuery } from "@tanstack/react-query";
import MediaGallery from "../../comps/productForm/MediaGallery";
import ProductFeatures from "../../comps/Product.Features";
import { useParams } from "next/navigation";
import { getProduct } from "@/lib/api/productAPI";
import F from "@/app/admin/comps/productForm";
import Fallback from "@/app/admin/comps/Fallback";
import { getQueryClient } from "@/app/TanProvider";
import { useEffect } from "react";
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
  getQueryClient().invalidateQueries({
    queryKey: ['products', prodId]
  })
  const productQuery = useQuery({
    queryKey: ['products', prodId],
    queryFn: () => getProduct(prodId)
  })

  // Fallback
  if (productQuery.isPending)
    return <Fallback>Loading ... </Fallback>
  else if (productQuery.isError)
    return <Fallback>Fail to load product</Fallback>

  // UI
  const p = productQuery.data
  // const p = rawProd

  return <div className="min-h-screen bg-white text-gray-800 font-sans">
    <form className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Bộ sưu tập media */}
      <MediaGallery medias={p.medias} prodName={p.name} />

      {/* Thông tin sản phẩm */}
      <div >
        <F.Inp disabled
          displayName="Tên SP"
          name="name"
          value={p.name}
        />
        <F.Inp disabled
          displayName="Danh mục"
          name="category"
          value={p.category?.name}
        />
        <F.Inp disabled
          displayName="Giá"
          type="number"
          name="price"
          value={p.price?.toString()} suffix="₫" className="text-2xl"
        />

        {/* Thuộc tính */}
        <F.Text disabled
          name='Mô tả'
          value={p.description}
        />
        <div className="grid grid-cols-2 p-4 rounded-sm">
          <b className="col-start-1 -col-end-1">Kích thước (cm)</b>
          <F.InlineInp disabled
            displayName="x"
            name="attributes.width" type="number"
            value={p.attributes?.width?.toString()}
          />
          <F.InlineInp disabled
            displayName="y"
            name="attributes.height" type="number"
            value={p.attributes?.height?.toString()}
          />
          <F.InlineInp disabled
            displayName="z"
            name="attributes.depth" type="number"
            value={p.attributes?.depth?.toString()}
          />
        </div>
        <F.Inp disabled
          displayName='Màu sắc'
          name="attributes.color"
          value={p.attributes?.color ?? ''}
        />
        <F.Inp disabled
          displayName='Chất liệu'
          name="attributes.material"
          value={p.attributes?.material ?? ''}
        />



        {/* Các thông tin bộ trợ */}
        <div className="text-sm">
          {/* Tính năng */}
          <ProductFeatures features={p.additionalInfors?.features} />
          <F.Inp disabled
            displayName="Xuất xứ"
            name="additionalInfors.origin"
            value={p.additionalInfors?.origin ?? ''}
          />
          <F.Inp disabled
            displayName="🔔 Lưu ý"
            name="additionalInfors.notice"
            value={p.additionalInfors?.notice ?? ''}
          />
          <F.Inp disabled
            displayName="🌱 Bền vững"
            name="additionalInfors.sustainability"
            value={p.additionalInfors?.sustainability ?? ''}
          />
          <F.Inp disabled
            displayName="🧴 Bảo quản"
            name="additionalInfors.productCare"
            value={p.additionalInfors?.productCare ?? ''}
          />
        </div>
      </div>
    </form>
  </div>
}
