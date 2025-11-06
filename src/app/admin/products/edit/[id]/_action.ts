'use server';

import { putProduct } from "@/lib/api/productAPI";
import { redirect } from "next/navigation";

type ActionData = {
    [key: string]: string
} | { error: string }

export async function editProductAction(prodId: string, prevState: ActionData, formData: FormData): Promise<ActionData> {
    const jwtToken = formData.get('token')?.toString() ?? ''
    formData.delete('token')
    try {
        await putProduct(prodId, formData, jwtToken)
    } catch (error: any) {
        return {
            error: error.message
        }
    }
    redirect('/admin/products/' + prodId)
}