'use client'

import { useEffect } from "react";
import type { MenuItem } from "@/types/menuItem";

import styles from './nav.module.scss'
import Panel from "./Nav.List.Panel";
import Footer from "./Nav.Footer";


type Props = {
    isActive: boolean
    handleActive: () => void
}

export default function Nav({ isActive, handleActive }: Props) {
    const menuItems = useGetMenuItems()

    useEffect(() => {
        if (isActive)
            document.body.style.overflow = 'hidden'
        else
            document.body.style.overflow = 'auto'
    },
        [isActive]
    )

    return (
        <>
            <div
                className={styles['overlay'] + (isActive ? '' : 'hidden')}
                onClick={handleActive}
            ></div >
            <nav
                className={styles['nav'] + ' ' + (isActive ? styles['active'] : '')}
            >
                <Panel
                    item={menuItems}
                    isActive={isActive}
                    layoutActive
                    isRoot
                    footerPanel={<Footer />}
                />
            </nav>

        </>
    );
}








// hierachical struture with
//  3 level
function useGetMenuItems(): MenuItem {
    return {
        display: 'cate',
        nameDisplay: '',
        categoryItems: [
            {
                display: 'cate',
                nameDisplay: "Quà tặng và dịch vụ cá nhân hóa",
                // 2
                categoryItems: [
                    {
                        display: 'link',
                        nameDisplay: "Tất cả quà tặng",
                        url: 'none'
                    },
                    {
                        display: 'cate',
                        nameDisplay: "Quà tặng cho nữ",
                        // 3
                        categoryItems: [
                            {
                                display: 'link',
                                nameDisplay: "Sản phẩm mới",
                                url: 'none',
                            },
                        ]
                    },
                    {
                        display: 'cate',
                        nameDisplay: "Quà tặng cho nữ",
                        // 3
                        categoryItems: [
                            {
                                display: 'link',
                                nameDisplay: "Túi xách và ví",
                                url: 'none',
                            },
                            {
                                display: 'link',
                                nameDisplay: "Đồ Nữ",
                                url: 'none',
                            },
                        ]
                    },
                ]
            },
            {
                display: 'cate',
                nameDisplay: "Sản phẩm mới",
                // 3
                categoryItems: [
                    {
                        display: 'link',
                        nameDisplay: "Đồ Nữ",
                        url: 'none',
                    },
                    {
                        display: 'link',
                        nameDisplay: "Đồ Nam",
                        url: 'none',
                    },
                ]
            },

            {
                display: 'link',
                nameDisplay: "Túi xách và ví",
                url: 'none',
            },
            {
                display: 'link',
                nameDisplay: "Đồ Nữ",
                url: 'none',
            },
            {
                display: 'link',
                nameDisplay: "Đồ Nam",
                url: 'none',
            },
            {
                display: 'link',
                nameDisplay: "Trang sức",
                url: 'none',
            },
            {
                display: 'link',
                nameDisplay: "Đồng hồ",
                url: 'none',
            },
            {
                display: 'link',
                nameDisplay: "Nước hoa",
                url: 'none',
            },
            {
                display: 'link',
                nameDisplay: "Rương, Phụ kiện du lịch và Trang trí nội thất",
                url: 'none',
            },
            {
                display: 'link',
                nameDisplay: "Dịch vụ",
                url: 'none',
            },
            {
                display: 'link',
                nameDisplay: "Maison Louis Vuitton",
                url: 'none',
            },
        ]
    }
}

