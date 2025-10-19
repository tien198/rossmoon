import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reduxSlices/modalSlice";

export const makeStore = () =>
    configureStore({
        reducer: {
            modal: modalReducer
        }
    })

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']