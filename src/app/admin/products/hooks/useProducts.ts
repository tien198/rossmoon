'use client'

import { ProductDTO } from "@/schemas/DTO/product.zod";
import { useState } from "react";

export function useProducts() {
    const [products, setProducts] = useState<ProductDTO[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showAddModal = () => { }
    const showDeleteModal = (id: string) => { }

    return {
        products, showAddModal, showDeleteModal
    }
}