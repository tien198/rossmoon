'use client'

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

export default function Footer() {
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
            title: "Về Louis Vuitton",
            content: [
                "Buổi trình diễn thời trang",
                "Nghệ thuật & Văn hóa",
                "La Maison",
                "Phát triển bền vững",
                "Tin mới nhất",
                "Nghề nghiệp",
                "Foundation Louis Vuitton",
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

    return (
        <footer className="bg-white border-t border-gray-200 px-6 py-8">
            {/* Logo */}
            <div className="text-center font-bold text-lg tracking-wider mb-6">
                LOUIS VUITTON
            </div>

            {/* Mobile Layout - Accordion */}
            <div className="lg:hidden">
                {menuItems.map((item, idx) => (
                    <div key={idx} className="border-t border-gray-200 py-4">
                        <button
                            className="w-full flex justify-between items-center text-gray-800 font-medium"
                            onClick={() => toggleAccordion(idx)}
                        >
                            {item.title}
                            {openIndex === idx ? (
                                <FaMinus className="text-gray-500" />
                            ) : (
                                <FaPlus className="text-gray-500" />
                            )}
                        </button>
                        {openIndex === idx && (
                            <div className="mt-3 pl-2 text-sm text-gray-600 space-y-2">
                                {item.content.map((sub, i) => (
                                    <p key={i} className="cursor-pointer hover:text-gray-900">
                                        {sub}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Desktop Layout - Grid */}
            <div className="hidden lg:grid grid-cols-4 gap-8 text-sm text-gray-800">
                {menuItems.map((item, idx) => (
                    <div key={idx}>
                        <h3 className="uppercase text-xs font-bold mb-3">{item.title}</h3>
                        <ul className="space-y-2">
                            {item.content.map((sub, i) => (
                                <li
                                    key={i}
                                    className="cursor-pointer hover:text-gray-900 leading-snug"
                                >
                                    {sub}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Footer bottom */}
            <div className="mt-8 text-center text-sm text-gray-700 border-t border-gray-200 pt-4 flex flex-col items-center gap-3">
                                    <div className="cursor-pointer">Sơ đồ trang web</div>
                    <div className="cursor-pointer">Pháp lý &amp; Quyền riêng tư</div>

                <div className="flex items-center gap-2">
                    🇻🇳
                    <span className="underline">Việt Nam</span>
                </div>

            </div>
        </footer>
    );
}
