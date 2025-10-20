'use client'

import { useAppDispatch, useAppSelector } from "@/lib/reducerhooks";
import { PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";

import styles from './Modal.module.scss'
import { hideModal, showModal } from "@/lib/reduxSlices/modalSlice";

export default function Modal({ children }: PropsWithChildren) {
    const isShow = useAppSelector(sel => sel.modal.isShow)
    const isFirstRender = useAppSelector(sel => sel.modal.isFirstRender)

    // Next specifical, we need wait HTML index render finish to access DOM
    const [modalEl, setModalEl] = useState<HTMLElement | null>(null)

    const dispatch = useAppDispatch()
    const onCloseFn = useAppSelector(sel => sel.modal.onCloseFn)

    const close = () => {
        dispatch(hideModal())
        onCloseFn?.()
    }

    useEffect(() => {
        setModalEl(document.getElementById('modal'))

        dispatch(hideModal())
        dispatch(showModal())
        const escapeEv = (e: KeyboardEvent) => {
            if (e.key == 'Escape')
                dispatch(hideModal())
        }
        addEventListener('keydown', escapeEv)

        return () => removeEventListener('keydown', escapeEv)
    }, [])

    if (!modalEl)
        return null

    const hiddenModalCls = isFirstRender ? 'hidden' : (
        isShow ? styles['show'] : styles['hidden']
    )

    return createPortal(
        <div
            className={
                styles['modal']
                + ' ' + hiddenModalCls
            }>
            <FaXmark
                className={styles['x-mark']}
                onClick={close}
            />
            {children}
        </div>,
        modalEl!
    )
}

