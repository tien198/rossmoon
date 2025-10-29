'use server';

import { editProduct } from "@/lib/api/products";

type ActionData = {
    [key: string]: string
}

export async function editProductAction(prodId: string, prevState: ActionData, formData: FormData) {
    const jwtToken = formData.get('token')?.toString() ?? ''
    formData.delete('token')

    const res = await editProduct(prodId, formData, jwtToken)

    return {}
}