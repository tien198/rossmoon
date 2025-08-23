'use client'

import { useEffect } from "react";
import type { MenuItem } from "@/types/menuItem";

import styles from './nav.module.scss'
import Panel from "./Nav.List.Panel";
import Footer from "./Nav.Footer";
import { useGetMenuItems } from "../hooks/useGetMenuItem";


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
