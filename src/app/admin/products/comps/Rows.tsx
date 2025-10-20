import ProductDTO from "@/DTO/product";

import { useEffect } from "react";
import { Pagination } from "@/schemas/base/pagination";
import Row from "./Row";

export type Actions = {
    actions: {
        showDeleteModal: (id: string) => void
    }
}
type Props = {
    page: Pagination<ProductDTO>
} & Actions
export default function ProdRows({ page, actions }: Props) {
    const observedRows: (Element | null)[] = []
    useEffect(
        () => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(i => {
                    if (i.isIntersecting) {
                        const searchs = new URLSearchParams()
                        searchs.set('page', String(page.page))
                        history.replaceState(null, '', location.pathname + '?' + searchs.toString())
                    }
                })
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
        page.results.map((prod) =>
            <Row
                key={prod.id}
                prod={prod}
                observedRows={observedRows}
                actions={actions}
            />
        )
    }</>
}