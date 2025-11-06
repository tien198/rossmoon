import { Gallery, ProductWithUrl } from "@/type/gallery";

export function getGallery_1st(): Gallery {
    return {
        title: 'Các thiết kế mới',
        category: {
            name: 'Dành cho nữ',
        },
        bannerType: 'image',
        desktopBanner: '/images/banners/W_BC_TEXTILES_SHAWLS_096_Aug2025_DI3.jpg',
        mobileBanner: '/images/banners/W_BC_TEXTILES_SHAWLS_096_Aug2025_DII.jpg',
        galleryUrl: 'url-none',
        products: [
            {
                "name": "Ví Đựng Hộ Chiếu",
                "imageUrls": ["/images/2025/products/louis-vuitton-lv-lanterne--M26036_PM2_Front view.jpg"],
                "productURL": "none-url"
            },
            {
                "name": "Túi Nice BB",
                "imageUrls": ["/images/2025/products/louis-vuitton-lv-lanterne--M26036_PM2_Front view.jpg"],
                "productURL": "none-url"
            },
            {
                "name": "Đầm Dáng Sơ Mi",
                "imageUrls": ["/images/2025/products/louis-vuitton-lv-lanterne--M26036_PM2_Front view.jpg"],
                "productURL": "none-url"
            },
            {
                "name": "Đầm Dáng Sơ Mi",
                "imageUrls": ["/images/2025/products/louis-vuitton-lv-lanterne--M26036_PM2_Front view.jpg"],
                "productURL": "none-url"
            }
        ] as ProductWithUrl[]
    }
}



export function getGallery_2nd(): Gallery {
    return {
        title: 'Các mẫu ví mới',
        category: {
            name: 'Dành cho nam',
        },
        bannerType: 'image',
        desktopBanner: '/images/banners/W_BC_TEXTILES_SHAWLS_096_Aug2025_DI3.jpg',
        mobileBanner: '/images/banners/W_BC_TEXTILES_SHAWLS_096_Aug2025_DII.jpg',
        galleryUrl: 'url-none',
        products: [
            {
                "name": "Ví Đựng Hộ Chiếu",
                "imageUrls": ["/images/2025/products/louis-vuitton-lv-lanterne--M26036_PM2_Front view.jpg"],
                "features": [
                    "Màu xám/vàng", "Chất liệu Monogram Glow Canvas", "Lớp lót bằng da bò", "4 khe đựng thẻ", "Ngăn phụ", "2 ngăn mở"
                ],
                "productURL": "none-url"
            },
            {
                "name": "Túi Nice BB",
                "imageUrls": ["/images/2025/products/louis-vuitton-lv-lanterne--M26036_PM2_Front view.jpg"],
                "productURL": "none-url"
            },
            {
                "name": "Đầm Dáng Sơ Mi",
                "imageUrls": ["/images/2025/products/louis-vuitton-lv-lanterne--M26036_PM2_Front view.jpg"],
                "productURL": "none-url",
            },
 
        ] as ProductWithUrl[]
    }
}
