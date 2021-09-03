import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false
}

const counterSlice = createSlice({
    name: 'addMemberModal',
    initialState,
    reducers: {
        openModal(state) {
            console.log("openmodalaction", state)
            state.isOpen = !state.isOpen
        },
    },
})

export const { openModal } = counterSlice.actions
export default counterSlice.reducer