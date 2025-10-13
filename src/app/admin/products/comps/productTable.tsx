'use client'

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { TiPlus } from "react-icons/ti";
import { useProducts } from "../hooks/useProducts";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api/products";
import { useSearchParams } from "next/navigation";
import Image from "next/image";


export default function ProductTable() {
    const {
        products, showAddModal, showDeleteModal
    } = useProducts()

    const searchQueries = useSearchParams()
    const page = Number(searchQueries.get('page')) || 0

    const prodsQuery = useInfiniteQuery({
        queryKey: ['products', 'infinite'],
        initialPageParam: page,
        queryFn: ({ pageParam }) => getProducts(pageParam),
        getNextPageParam: (last, all, lastPageParam) => last.hasNext ? lastPageParam + 1 : undefined
    })

    const prodsTable = useRef<HTMLTableSectionElement>(null)

    useEffect(() => {
        const container = prodsTable.current!
        const scrollEvt = (e: Event) => {

            const inEgde = container.scrollHeight - container.scrollTop <= container.clientHeight
            if (!inEgde)
                return

            if (prodsQuery.isFetchingNextPage || prodsQuery.isFetchingPreviousPage)
                return

            container!.removeEventListener('scroll', scrollEvt)
            prodsQuery.fetchNextPage()

            if (prodsQuery.hasNextPage || prodsQuery.hasPreviousPage)
                e.currentTarget!.addEventListener('scroll', scrollEvt)
        }
        container.addEventListener('scroll', scrollEvt)
    }, [prodsTable])

    return (
        <div >
            <header className={styles['header']}>
                <h1>Quản lý sản phẩm</h1>
                <button onClick={e => showAddModal()}>
                    <TiPlus />
                    Thêm <span className="hidden md:inline-block">sản phẩm</span>
                </button>
            </header>
            <div className={styles['tableContainer']}>
                <table className={styles['table']}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            {/* <th>Tồn kho</th> */}
                            <th className={styles['actions']}>Hành động</th>
                        </tr>
                    </thead>
                    <tbody ref={prodsTable}>
                        {prodsQuery.data?.pages.length === 0 ? (
                            <tr>
                                <td colSpan={5} className={styles['empty']}>
                                    Không có sản phẩm nào
                                </td>
                            </tr>
                        ) : (
                            prodsQuery.data?.pages.map(page =>
                                page.results.map(p =>
                                    <tr key={p.id}>
                                        <td>
                                            <Image
                                                src={(process.env.ORIGIN ?? '') + p.attributes?.medias?.[0]?.url}
                                                alt={p.name ?? ''}
                                                width={550} height={550}
                                            />
                                        </td>
                                        <td>{p.name}</td>
                                        <td>{Number(p.price).toLocaleString()} ₫</td>
                                        {/* <td>{p.stock}</td> */}
                                        <td className={styles['actions']}>
                                            <button onClick={() => showDeleteModal(p.id)}>Xóa</button>
                                        </td>
                                    </tr>
                                )
                            )
                        )}
                        <tr className="h-[50vh]"></tr>
                    </tbody>
                </table>
                {/* <button className="border border-amber-800" onClick={() => prodsQuery.fetchNextPage()}>Load more ...</button> */}
            </div>
        </div>
    );
};
