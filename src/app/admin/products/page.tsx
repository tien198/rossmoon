'use client'

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Product } from "@/schemas/client/product.zod";
import { TiPlus } from "react-icons/ti";


const ProductTable = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addProduct = (prod: Product) => {
        setProducts((prev) => [...prev, prod]);
    };

    const deleteProduct = (id: string) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };
    const showAddModal = () => { }
    const showDeleteModal = (id: string) => { }


    return (
        <>
            <header className={styles.header}>
                <h1>Quản lý sản phẩm</h1>
                <button onClick={e => showAddModal()}>
                    <TiPlus />
                    Thêm sản phẩm
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

export default ProductTable;
