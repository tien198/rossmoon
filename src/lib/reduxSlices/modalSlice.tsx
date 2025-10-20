import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type State = {
    isShow: boolean
    // indicate that whether modal is rendered in the first time
    isFirstRender: boolean
    // function that will be call when the modal was closed
    onCloseFn?: () => void
}

const initialState: State = {
    isShow: false,
    isFirstRender: true
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal(state) {
            state.isShow = true
        },
        hideModal(state) {
            state.isShow = false
        },
        toggleModal(state) {
            state.isShow = !state.isShow
        },
        setOnCloseFn(state, action: PayloadAction<() => void>) {
            state.onCloseFn = () => {
                action.payload()
                //  set isFirstRender = false every time close modal
                state.isFirstRender = false
            }
        }
    }
})

export const {
    showModal, hideModal, toggleModal
} = modalSlice.actions

export default modalSlice.reducer