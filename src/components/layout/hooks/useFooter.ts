import { useState } from "react";

export function useFooter() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const menuItems = [
        {
            title: "Hỗ trợ",
            content: [
                "Quý khách có thể liên hệ với chúng tôi qua Hotline +84 2838614107 , Zalo, Email, hoặc các phương thức liên hệ khác.",
                "Câu hỏi thường gặp",
                "Chăm sóc sản phẩm",
                "Cửa hàng",
            ],
        },
        {
            title: "Dịch vụ",
            content: [
                "Dịch vụ bảo hành",
                "Dịch vụ cá nhân hóa",
                "Nghệ thuật tặng quà",
                "Tải ứng dụng của chúng tôi",
            ],
        },
        {
            title: "Về RossMoon",
            content: [
                "Buổi trình diễn thời trang",
                "Nghệ thuật & Văn hóa",
                "La Maison",
                "Phát triển bền vững",
                "Tin mới nhất",
                "Nghề nghiệp",
                "Foundation Rossmoon",
            ],
        },
        {
            title: "Kết nối với chúng tôi",
            content: [
                "Đăng ký nhận thư điện tử để cập nhật tin tức mới nhất...",
                "Theo dõi chúng tôi",
            ],
        },
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return {
        menuItems, openIndex, toggleAccordion
    }
}