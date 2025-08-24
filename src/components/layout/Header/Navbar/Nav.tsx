'use client'

import { useEffect } from "react";

import Panel from "./Nav.List.Panel";
import Footer from "./Nav.Footer";
import { useGetNavMenuItems } from "../../hooks/useGetMenuItem";

import styles from './nav.module.scss'

type Props = {
    isActive: boolean
}

export default function Nav({ isActive }: Props) {
    const menuItems = useGetNavMenuItems()

    useEffect(() => {
        if (isActive)
            document.body.style.overflow = 'hidden'
        else
            document.body.style.overflow = 'auto'
    },
        [isActive]
    )

    return (
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
    );
}
