'use client'

import MediaGallery from "../../../comps/productForm/MediaGallery";
import ProductFeatures from "../../../comps/Product.Features";
import F from "@/app/admin/comps/productForm";
import Fallback from "@/app/admin/comps/Fallback";
import useEditProduct from "../../hooks/useEditProduct";



export default function Product() {
  const { productQuery, actionState, formRef, handleSubmit } = useEditProduct()

  // Fallback
  if (productQuery.isPending)
    return <Fallback>Loading ... </Fallback>
  else if (productQuery.isError)
    return <Fallback>Fail to load product</Fallback>

  // UI
  const p = productQuery.data

  return <div className="min-h-screen bg-white text-gray-800 font-sans">
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {/* Bộ sưu tập media */}
      <MediaGallery medias={p.medias} prodName={p.name} />

      {/* Thông tin sản phẩm */}
      <div >
        <F.Inp
          displayName="Tên SP"
          name="name"
          defaultValue={p.name}
        />
        <F.Inp
          displayName="Danh mục"
          name="category"
          defaultValue={p.category?.name}
        />
        <F.Inp
          displayName="Giá"
          type="number"
          name="price"
          defaultValue={p.price?.toString()} suffix="₫" className="text-2xl"
        />

        {/* Thuộc tính */}
        <F.Text
          displayName='Mô tả'
          name="description"
          defaultValue={p.description}
        />
        <div className="grid grid-cols-2 p-4 rounded-sm">
          <b className="col-start-1 -col-end-1">Kích thước (cm)</b>
          <F.InlineInp
            displayName="x"
            name="attributes.width" type="number"
            defaultValue={p.attributes?.width?.toString()}
          />
          <F.InlineInp
            displayName="y"
            name="attributes.height" type="number"
            defaultValue={p.attributes?.height?.toString()}
          />
          <F.InlineInp
            displayName="z"
            name="attributes.depth" type="number"
            defaultValue={p.attributes?.depth?.toString()}
          />
        </div>
        <F.Inp
          displayName='Màu sắc'
          name="attributes.color"
          defaultValue={p.attributes?.color ?? ''}
        />
        <F.Inp
          displayName='Chất liệu'
          name="attributes.material"
          defaultValue={p.attributes?.material ?? ''}
        />


        {/* Các thông tin bộ trợ */}
        <div className="text-sm">
          {/* Tính năng */}
          <ProductFeatures features={p.additionalInfors?.features} />
          <F.Text
            displayName="Xuất xứ"
            name="additionalInfors.origin"
            defaultValue={p.additionalInfors?.origin ?? ''}
          />
          <F.Text
            displayName="🔔 Lưu ý"
            name="additionalInfors.notice"
            defaultValue={p.additionalInfors?.notice ?? ''}
          />
          <F.Text
            displayName="🌱 Bền vững"
            name="additionalInfors.sustainability"
            defaultValue={p.additionalInfors?.sustainability ?? ''}
          />
          <F.Text
            displayName="🧴 Bảo quản"
            name="additionalInfors.productCare"
            defaultValue={p.additionalInfors?.productCare ?? ''}
          />


          {/* Token */}
          <input hidden
            name="token"
            defaultValue={
              'bearer '
              + (localStorage.getItem('jwtToken') ?? '')
            }
          />
        </div>
        <button>Gửi</button>
      </div>
    </form>
  </div>
}
