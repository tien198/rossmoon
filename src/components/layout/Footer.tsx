'use client'

import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Container from "./Container";
import { useFooter } from "./hooks/useFooter";

export default function Footer() {
    const { menuItems, openIndex, toggleAccordion } = useFooter()

    return (
        <footer className="bg-white text-black text-sm font-extralight">
            <div className="border-t border-b border-gray-200">
                {/* Logo */}
                <div className="ojuju md:hidden text-center font-bold text-lg tracking-wider mt-6">
                    ROSS MOON
                </div>

                {/* Mobile Layout - Accordion */}
                <Container>
                    <div className="lg:hidden pt-8 text-base">

                        {menuItems.map((item, idx) => (
                            <div key={idx} className="border-t border-gray-200 py-4">
                                <button
                                    className="w-full flex justify-between items-center font-medium"
                                    onClick={() => toggleAccordion(idx)}
                                >
                                    {item.title}
                                    {openIndex === idx ? (
                                        <FaMinus size={10} />
                                    ) : (
                                        <FaPlus size={10} />
                                    )}
                                </button>
                                {openIndex === idx && (
                                    <div className="mt-3 pl-2 space-y-2">
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
                    <div className="hidden lg:grid grid-cols-4 gap-8 md:py-8">

                        {menuItems.map((item, idx) => (
                            <div key={idx}>
                                <h3 className="uppercase font-extralight" style={{ fontSize: '0.65rem' }}>{item.title}</h3>
                                <ul className="space-y-2 mt-8">
                                    {item.content.map((sub, i) => (
                                        <li
                                            key={i}
                                            className="mt-5 mb-0 cursor-pointer hover:text-gray-900 leading-snug"
                                        >
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Footer bottom */}
            <Container>

                <div className="flex flex-col items-center gap-6 text-center border-gray-200 text-base py-11
                md:flex-row-reverse md:justify-between md:text-sm">
                    <div className="flex justify-between gap-5">
                        <div className="cursor-pointer">Sơ đồ trang web</div>
                        <div className="cursor-pointer">Pháp lý &amp; Quyền riêng tư</div>
                    </div>

                    <div className="flex items-center gap-2">
                        🇻🇳
                        <span className="underline">Việt Nam</span>
                    </div>

                </div>
                <div className="ojuju hidden md:block text-center font-bold text-lg tracking-wider mb-10">
                    Ross Moon
                </div>
            </Container>
        </footer>
    );
}
