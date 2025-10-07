'use client'

import React from "react";
import styles from "./styles.module.scss";
import { TiPlus } from "react-icons/ti";
import { useProducts } from "./hooks/useProducts";


export default function ProductTable() {
    const {
        products, showAddModal, showDeleteModal
    } = useProducts()

    return (
        <>
            <header className={styles.header}>
                <h1>Quản lý sản phẩm</h1>
                <button onClick={e => showAddModal()}>
                    <TiPlus />
                    Thêm <span className="hidden md:inline-block">sản phẩm</span>
                </button>
            </header>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            {/* <th>Tồn kho</th> */}
                            <th className={styles.actions}>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan={5} className={styles.empty}>
                                    Không có sản phẩm nào
                                </td>
                            </tr>
                        ) : (
                            products.map((p) => (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{Number(p.price).toLocaleString()} ₫</td>
                                    {/* <td>{p.stock}</td> */}
                                    <td className={styles.actions}>
                                        <button onClick={() => showDeleteModal(p.id)}>Xóa</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};
