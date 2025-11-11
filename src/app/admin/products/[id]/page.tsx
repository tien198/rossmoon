'use client'

import { useQuery } from "@tanstack/react-query";
import MediaGallery from "../../comp/productForm/MediaGallery";
import ProductFeatures from "../../comp/Product.Features";
import { useParams } from "next/navigation";
import { getProduct } from "@/client/lib/api/productAPI";
import F from "@/app/admin/comp/productForm";
import Fallback from "@/app/admin/comp/Fallback";
import { getQueryClient } from "@/app/TanProvider";



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

  return <div className="min-h-screen bg-white text-gray-800 font-sans">
    <form className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Bộ sưu tập media */}
      <MediaGallery medias={p.medias} prodName={p.name} disabled />

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
