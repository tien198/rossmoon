'use client'

import React from "react";
import styles from "./styles.module.scss";
import { TiPlus } from "react-icons/ti";
import { useProducts } from "../hooks/useProducts";
import ProdRows from "./Rows";
import ProductModal from "@/components/modals/ProductModal";


export default function ProductTable() {
    const {
        showAddModal, showDeleteModal,
        prodsQuery, prodsTable
    } = useProducts()

    return (
        <div className="h-full py-4 md:py-6 md:px-1">
            <header className={styles['header']}>
                <h1>Quản lý sản phẩm</h1>
                <button onClick={e => showAddModal()}>
                    <TiPlus />
                    Thêm <span className="hidden md:inline-block">sản phẩm</span>
                </button>
            </header>
            <div className={styles['tableContainer']}>
                <table className={styles['table'] + ' flex flex-col h-full'}>
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
                        {
                            prodsQuery.isFetchingPreviousPage
                            && <tr className="h-24">
                                <td></td>
                                <td colSpan={3} className="py-11 text-center text-xl">... Loading</td>
                            </tr>
                        }
                        {
                            prodsQuery.data?.pages.length === 0
                                ?
                                <tr>
                                    <td colSpan={5} className={styles['empty']}>
                                        Không có sản phẩm nào
                                    </td>
                                </tr>
                                :
                                prodsQuery.data?.pages.map((page) =>
                                    <ProdRows
                                        key={page.results[0].id}
                                        page={page}
                                        // pageNumber={pageNumber.current}
                                        actions={{ showDeleteModal }}
                                    />
                                )

                        }
                        {
                            prodsQuery.isFetchingNextPage
                            && <tr className="h-24">
                                <td></td>
                                <td colSpan={3} className="py-11 text-center text-xl">... Loading</td>
                            </tr>
                        }
                        {
                            (prodsQuery.data!.pages.length <= 1)
                            && <tr className="h-[70vh] sm:h-[50vh] md:[20vh]"></tr>
                        }
                    </tbody>
                </table>
                {/* <button className="border border-amber-800" onClick={() => prodsQuery.fetchNextPage()}>Load more ...</button> */}
            </div>
            <ProductModal />
        </div>
    );
};
