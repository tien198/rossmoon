import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal(state) {
            state.show = true
        },
        hideModal(state) {
            state.show = false
        },
        toggleModal(state) {
            state.show = !state.show
        }
    }
})

export const {
    showModal, hideModal, toggleModal
} = modalSlice.actions

export default modalSlice.reducer