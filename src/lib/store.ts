import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reduxSlices/modalSlice";
import productDetailModalReducer from './reduxSlices/productDetailModalSlice'

export const makeStore = () =>
    configureStore({
        reducer: {
            modal: modalReducer,
            productDetailModal: productDetailModalReducer
        }
    })

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']