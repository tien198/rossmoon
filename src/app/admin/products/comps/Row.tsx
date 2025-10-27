import ProductDTO from "@/DTO/product"
import { Actions } from "./Rows"
import { useEffect, useRef } from "react"
import Image from "next/image"

import styles from "./styles.module.scss";
import { useAppDispatch } from "@/lib/store/reducerhooks";
import { showModal } from "@/lib/store/reduxSlices/modalSlice";
import { setProduct } from "@/lib/store/reduxSlices/productDetailModalSlice";
import { useRouter } from "next/navigation";

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

    const nav = useRouter()
    const navigateToDetail = () => nav.push('products/' + prod.id)

    return <tr ref={trRef}>
        <td onClick={navigateToDetail}>
            <Image
                src={(process.env.ORIGIN ?? '') + prod?.medias?.[0]?.url}
                alt={prod.name ?? ''}
                width={350} height={350}
            />
        </td>
        <td onClick={navigateToDetail}>{prod.name}</td>
        <td onClick={navigateToDetail}>
            {Number(prod.price).toLocaleString()} ₫
        </td>
        {/* <td>{p.stock}</td> */}
        <td className={styles['actions']}>
            <button onClick={() => actions.showDeleteModal(prod.id)}>Xóa</button>
        </td>
    </tr>
}