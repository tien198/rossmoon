import Modal from "../../../../components/modals/Modal";
import { useAppSelector } from "@/lib/reducerhooks";
import MediaGallery from "../comps/modalComps/MediaGallery";
import ProductFeatures from "../comps/modalComps/ProductFeatures";


export default function ProductModal() {
  const p = useAppSelector(state => state.productDetailModal)

  return <Modal>
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Bộ sưu tập media */}
        <MediaGallery medias={p.attributes?.medias} />

        {/* Thông tin sản phẩm */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{p.name}</h1>
          <p className="text-gray-500 mb-6">{p.category?.name}</p>
          <p className="text-2xl font-semibold mb-4">
            {p.price?.toLocaleString('vi-VN')}₫
          </p>
          <p className="mb-6 leading-relaxed text-gray-700">{p.description}</p>

          {/* Thuộc tính */}
          <div className="space-y-2 mb-8">
            <p><strong>Màu sắc:</strong> {p.attributes?.color}</p>
            <p><strong>Kích thước (cm):</strong> {p.attributes?.width} x {p.attributes?.height} x {p.attributes?.depth}</p>
            <p><strong>Xuất xứ:</strong> {p.origin}</p>
          </div>

          {/* Tính năng */}
          <ProductFeatures features={p.features} />

          {/* Các ghi chú */}
          <div className="mt-8 space-y-3 text-sm text-gray-600">
            <p><strong>🔔 Lưu ý:</strong> {p.notice}</p>
            <p><strong>🌱 Bền vững:</strong> {p.sustainability}</p>
            <p><strong>🧴 Bảo quản:</strong> {p.productCare}</p>
          </div>
        </div>
      </div>
    </div>
  </Modal>
}