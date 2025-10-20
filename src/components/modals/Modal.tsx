'use client'

import { useAppDispatch, useAppSelector } from "@/lib/reducerhooks";
import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";

import styles from './Modal.module.scss'
import { hideModal, showModal } from "@/lib/reduxSlices/modalSlice";

export default function Modal({ children }: PropsWithChildren) {
    const isShow = useAppSelector(sel => sel.modal.isShow)
    const isFirstRender = useAppSelector(sel => sel.modal.isFirstRender)

    const dispatch = useAppDispatch()
    const onCloseFn = useAppSelector(sel => sel.modal.onCloseFn)

    const close = () => {
        dispatch(hideModal())
        onCloseFn?.()
    }

    useEffect(() => {
        dispatch(showModal())
        const escapeEv = (e: KeyboardEvent) => {
            if (e.key == 'Escape')
                dispatch(hideModal())
        }
        addEventListener('keydown', escapeEv)

        return () => removeEventListener('keydown', escapeEv)
    })
    console.log(
        document.getElementById('modal')!
    );


    return createPortal(
        <div className={
            isFirstRender ? 'hidden' : (
                isShow ? '' : styles['fade-in']
            )
        }>
            <div
                className={styles['backdrop']}
                onClick={close}
            ></div>
            <div className={styles['modal']}>
                <FaXmark
                    className={styles['x-mark']}
                    onClick={close}
                />
                {children}
            </div>
        </div>,
        document.getElementById('modal')!
    )
}