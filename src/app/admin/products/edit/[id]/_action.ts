'use server';

import { putProduct } from "@/lib/api/productAPI";

type ActionData = {
    [key: string]: string
} | { error: string }

export async function editProductAction(prodId: string, prevState: ActionData, formData: FormData): Promise<ActionData> {
    const jwtToken = formData.get('token')?.toString() ?? ''
    formData.delete('token')
    try {
        const result = await putProduct(prodId, formData, jwtToken)
        return result
    } catch (error: any) {
        return {
            error: error.message
        }
    }
}