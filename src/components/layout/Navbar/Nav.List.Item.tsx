'use client'

import { IoIosArrowForward } from "react-icons/io"
import type { MenuItem } from "../../types/menuItem"

import styles from './nav.module.scss'
import Panel from "./Nav.List.Panel"
import { useContext } from "react"
import { ListPanelContext } from "./store/panelContext"

type Props = {
    item: MenuItem
    idx: number
    layoutActive: boolean
}

// Recursion
export default function Item({ item, idx, layoutActive }: Props) {
    const { state, setActIndex, setSelectedIndex } = useContext(ListPanelContext)

    const isActive = state.actIdx === idx
    const isSelected = state.selectedIdx === idx


    const isSelectedCls = (isActive || isSelected)
        ? styles['is-selected']
        // only disable item when there is another item was active
        : (state.actIdx === null && state.selectedIdx === null)
            ? ''
            : styles['disabled']

    // base case
    if (item.display == 'link')
        return (
            <li
                onMouseEnter={() => setSelectedIndex(idx)}
                onMouseLeave={() => setSelectedIndex(idx)}
            >
                <div className={styles['item']}>
                    <span
                        className={isSelectedCls}
                    >
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.nameDisplay}
                        </a>
                    </span>
                </div>
            </li>
        )

    // recursive case
    // - (recursion Item function in Panel componet)
    return (
        <li
            onMouseEnter={() => setSelectedIndex(idx)}
            onMouseLeave={() => setSelectedIndex(idx)}
        >
            <button
                className={`${styles['item']} `}
                onClick={() => {
                    setActIndex(idx)
                }}

            >
                <span className={isSelectedCls}>{item.nameDisplay}</span>
                <IoIosArrowForward color="#000" />
            </button>
            {/*
                Loop for categories item and 
                call Item (recursion) in every item
            */}
            <Panel
                item={item}
                layoutActive={isActive}
                isActive={isActive && layoutActive}
                handleActivate={() => {
                    setActIndex(idx)
                }}
            />
        </li>
    )
}


// Câu chuyện ĐỆ QUY:
/*
    STAR
    + Situation: Cần lặp qua dữ liệu để render các item trong Navbar, các item lại có cấu trúc phân cấp lồng nhau.
    + Task: phân tích xem nên gõ chay HTML hay dùng lập trình để 
    + Action: Sử dụng đệ quy, để duyệt qua các item có cấu trúc lồng nhau.
    + Result: Hoàn thiện
*/