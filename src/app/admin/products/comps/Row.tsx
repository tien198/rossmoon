import ProductDTO from "@/DTO/product"
import { Actions } from "./Rows"
import { useEffect, useRef } from "react"
import Image from "next/image"

import styles from "./styles.module.scss";
import { useAppDispatch } from "@/lib/reducerhooks";
import { showModal } from "@/lib/reduxSlices/modalSlice";
import { setProduct } from "@/lib/reduxSlices/productDetailModalSlice";

type RowProps = {
    prod: ProductDTO
    observedRows: (Element | null)[]
} & Actions

export default function Row({ prod, observedRows, actions }: RowProps) {
    const trRef = useRef<HTMLTableRowElement>(null)
    useEffect(() => {
        observedRows.push(trRef.current)
    })

    const dispatch = useAppDispatch()
    const showProductModal = () => {
        dispatch(showModal())
        dispatch(setProduct(prod))
    }

    return <tr ref={trRef} onClick={showProductModal}>
        <td>
            <Image
                src={(process.env.ORIGIN ?? '') + prod.attributes?.medias?.[0]?.url}
                alt={prod.name ?? ''}
                width={350} height={350}
            />
        </td>
        <td>{prod.name}</td>
        <td>
            {Number(prod.price).toLocaleString()} ₫
        </td>
        {/* <td>{p.stock}</td> */}
        <td className={styles['actions']}>
            <button onClick={() => actions.showDeleteModal(prod.id)}>Xóa</button>
        </td>
    </tr>
}