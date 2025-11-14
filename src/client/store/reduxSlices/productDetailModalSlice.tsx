import type { _Product } from "@/client/type/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState:Partial<_Product> = {}

const productModalSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        setProduct(state, action: PayloadAction<_Product>) {
            return action.payload
        }
    }
})

export const { setProduct } = productModalSlice.actions
export default productModalSlice.reducer