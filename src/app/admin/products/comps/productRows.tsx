import ProductDTO from "@/DTO/product";
import Image from "next/image";

import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";

type Actions = {
    actions: {
        showDeleteModal: (id: string) => void
    }
}
type Props = {
    prods: ProductDTO[]
    pageNumber: number
} & Actions
export default function ProdRows({ prods, pageNumber, actions }: Props) {
    const observedRows: (Element | null)[] = []
    useEffect(
        () => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(i => {
                    if (i.isIntersecting) {
                        const searchs = new URLSearchParams()
                        searchs.set('page', String(pageNumber))
                        history.replaceState(null, '', location.pathname + '?' + searchs.toString())
                    }
                }
                )
            })
            observedRows.forEach((i, id, arr) => {
                // observe the first and the last
                if (id === 0 || id === arr.length - 1)
                    observer.observe(i!)
            })

            return () => observer.disconnect()
        }
        , []
    )

    return <>{
        prods.map((prod, id) =>
            <Row stt={++id}
                key={prod.id}
                prod={prod}
                observedRows={observedRows}
                actions={actions}
            />
        )
    }</>
}


type RowProps = {
    prod: ProductDTO
    observedRows: (Element | null)[]
} & Actions

function Row({ prod, observedRows, actions, stt }: RowProps) {
    const trRef = useRef<HTMLTableRowElement>(null)
    useEffect(() => {
        observedRows.push(trRef.current)
    })
    return <tr ref={trRef}>
        <td>{stt}</td>
        <td>
            <Image
                src={(process.env.ORIGIN ?? '') + prod.attributes?.medias?.[0]?.url}
                alt={prod.name ?? ''}
                width={350} height={350}
            />
        </td>
        <td>{prod.name}</td>
        <td>
            {Number(prod.price).toLocaleString()}₫
        </td>
        {/* <td>{p.stock}</td> */}
        <td className={styles['actions']}>
            <button onClick={() => actions.showDeleteModal(prod.id)}>Xóa</button>
        </td>
    </tr>
}