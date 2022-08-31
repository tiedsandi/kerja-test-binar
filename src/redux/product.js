import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import testbinarapi from './api/testbinarapi';

export const fetchProduct = createAsyncThunk(
    'auth/fetchProduct',
    async () => {
        const res = await testbinarapi.get('/v1/products', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("access_token")
            }
        });
        return res.data.result;
    }
)

export const createProduct = createAsyncThunk(
    'auth/createProduct',
    async (data) => {
        const res = await testbinarapi.post('v1/products', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("access_token")
            }
        });
        return res.data
    }
)

export const editProduct = createAsyncThunk(
    'auth/editProduct',
    async (data) => {
        const res = await testbinarapi.post('/auth/signup', data);
        if (res.data.errors == null) {
            return res.data;
        } else {
            throw new Error(res.data.errors.email[0]);
        }
    }
)

export const deleteProduct = createAsyncThunk(
    'auth/deleteProduct',
    async (data) => {
        const res = await testbinarapi.post('/auth/signup', data);
        if (res.data.errors == null) {
            return res.data;
        } else {
            throw new Error(res.data.errors.email[0]);
        }
    }
)

const initialState = {
    products: null,
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        // ======= fetch ======= //
        [fetchProduct.pending]: (state) => {
            return { ...state, loading: true }
        },
        [fetchProduct.fulfilled]: (state, action) => {
            return { ...state, loading: false, products: action.payload }
        },
        [fetchProduct.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error.message }
        },
        // ======= create ======= //
        [createProduct.pending]: (state) => {
            console.log('pending')
            return { ...state, loading: true, error: null }
        },
        [createProduct.fulfilled]: (state, action) => {
            console.log('suksess')
            return { ...state, loading: false }
        },
        [createProduct.rejected]: (state, action) => {
            console.log('gagal')
            console.log(action.error.message)
            return { ...state, loading: false, error: action.error.message }
        },
        // ======= edit ======= //
        [editProduct.pending]: (state) => {
            return { ...state, loading: true }
        },
        [editProduct.fulfilled]: (state, action) => {
            return { ...state, loading: false, success: 'login successed' }
        },
        [editProduct.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error.message }
        },
        // ======= delete ======= //
        [deleteProduct.pending]: (state) => {
            return { ...state, loading: true, error: null }
        },
        [deleteProduct.fulfilled]: (state, action) => {
            return { ...state, loading: false, success: 'please login' }
        },
        [deleteProduct.rejected]: (state, action) => {
            console.log(action.error.message)
            return { ...state, loading: false, error: action.error.message }
        },
    }
})


export default productSlice.reducer;
