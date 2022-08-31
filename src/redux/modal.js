import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: null,
    id: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.type = action.payload;
        },
        setId: (state, action) => {
            state.id = action.payload;
        }
    }
})

export const { setModal, setId } = modalSlice.actions;
export default modalSlice.reducer;
