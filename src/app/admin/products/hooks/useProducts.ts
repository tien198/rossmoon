'use client'

import { Product } from "@/schemas/client/product.zod";
import { useState } from "react";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showAddModal = () => { }
    const showDeleteModal = (id: string) => { }

    return {
        products, showAddModal, showDeleteModal
    }
}