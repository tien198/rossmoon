import ProductDTO from "@/DTO/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:Partial<ProductDTO> = {}

const productModalSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        setProduct(state, action: PayloadAction<ProductDTO>) {
            return action.payload
        }
    }
})

export const { setProduct } = productModalSlice.actions
export default productModalSlice.reducer