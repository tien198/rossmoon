import { Product } from "@/schemas/client/product.zod";
import Modal from "./Modal";
import { useAppSelector } from "@/lib/reducerhooks";


export default function ProductModal() {
    const product = useAppSelector(state => state.productDetailModal)

    const { name, price, description, attributes, features, origin, notice, sustainability, productCare, category } = product;

    return <Modal>
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* Title + Price */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 mb-4">
                <h1 className="text-3xl font-semibold text-gray-900">{name}</h1>
                <p className="text-xl text-gray-700 font-medium mt-2 md:mt-0">
                    {price?.toLocaleString("vi-VN")} ₫
                </p>
            </div>

            {/* Media Section */}
            {attributes?.medias && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {attributes.medias.map((media, i) =>
                        media?.type === "image" ? (
                            <img
                                key={i}
                                src={media.url}
                                alt={name}
                                className="rounded-lg w-full h-64 object-cover shadow-sm"
                            />
                        ) : (
                            <video key={i} controls className="rounded-lg w-full h-64 object-cover shadow-sm">
                                <source src={media?.url} />
                            </video>
                        )
                    )}
                </div>
            )}

            {/* Description */}
            <p className="text-gray-700 mb-6">{description}</p>

            {/* Attributes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {attributes?.color && (
                    <div>
                        <p className="text-gray-500 text-sm">Màu sắc</p>
                        <p className="font-medium">{attributes.color}</p>
                    </div>
                )}
                {attributes?.width && (
                    <div>
                        <p className="text-gray-500 text-sm">Chiều ngang</p>
                        <p className="font-medium">{attributes.width} cm</p>
                    </div>
                )}
                {attributes?.height && (
                    <div>
                        <p className="text-gray-500 text-sm">Chiều cao</p>
                        <p className="font-medium">{attributes.height} cm</p>
                    </div>
                )}
                {attributes?.depth && (
                    <div>
                        <p className="text-gray-500 text-sm">Chiều rộng</p>
                        <p className="font-medium">{attributes.depth} cm</p>
                    </div>
                )}
            </div>

            {/* Features */}
            {features && (
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Đặc điểm nổi bật</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Extra Info */}
            <div className="space-y-3 text-gray-700">
                {origin && (
                    <p>
                        <span className="font-semibold">Xuất xứ:</span> {origin}
                    </p>
                )}
                {notice && (
                    <p>
                        <span className="font-semibold">Lưu ý:</span> {notice}
                    </p>
                )}
                {sustainability && (
                    <p>
                        <span className="font-semibold">Tính bền vững:</span> {sustainability}
                    </p>
                )}
                {productCare && (
                    <p>
                        <span className="font-semibold">Chăm sóc sản phẩm:</span> {productCare}
                    </p>
                )}
                {category && (
                    <p>
                        <span className="font-semibold">Danh mục:</span> {category.name}
                    </p>
                )}
            </div>

            <p className="text-sm text-gray-500 mt-6">
                Ngày tạo: {new Date(product.createdAt ?? '').toLocaleDateString("vi-VN")}
            </p>
        </div>
    </Modal>
}