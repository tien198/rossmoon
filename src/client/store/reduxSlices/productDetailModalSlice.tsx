import type { Product } from "@/client/schema/product.zod";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:Partial<Product> = {}

const productModalSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        setProduct(state, action: PayloadAction<Product>) {
            return action.payload
        }
    }
})

export const { setProduct } = productModalSlice.actions
export default productModalSlice.reducer