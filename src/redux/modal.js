import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: ''
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.type = action.payload;
        }
    }
})

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
