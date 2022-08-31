import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import testbinarapi from './api/testbinarapi';

export const fetchProducts = createAsyncThunk(
    'auth/fetchProducts',
    async () => {
        const res = await testbinarapi.get('/v1/products', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("access_token")
            }
        });
        return res.data.result;
    }
)

export const fetchProduct = createAsyncThunk(
    'auth/fetchProduct',
    async (id) => {
        const res = await testbinarapi.get(`/v1/products/${id}`, {
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
        const res = await testbinarapi.post('/v1/products', data, {
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
    async ({ id, data }) => {
        const res = await testbinarapi.put(`/v1/products/${id}`, data);
        if (res.data.errors == null) {
            return res.data;
        } else {
            throw new Error(res.data.errors.email[0]);
        }
    }
)

export const deleteProduct = createAsyncThunk(
    'auth/deleteProduct',
    async (id) => {
        const res = await testbinarapi.delete(`/v1/products/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("access_token")
            }
        });
        return res.data;
    }
)

const initialState = {
    products: null,
    product: null,
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        // ======= products ======= //
        [fetchProducts.pending]: (state) => {
            return { ...state, loading: true }
        },
        [fetchProducts.fulfilled]: (state, action) => {
            return { ...state, loading: false, products: action.payload }
        },
        [fetchProducts.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error.message }
        },
        // ======= product ======= //
        [fetchProduct.pending]: (state) => {
            return { ...state, loading: true }
        },
        [fetchProduct.fulfilled]: (state, action) => {
            return { ...state, loading: false, product: action.payload }
        },
        [fetchProduct.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error.message }
        },
        // ======= create ======= //
        [createProduct.pending]: (state) => {

            return { ...state, loading: true, error: null }
        },
        [createProduct.fulfilled]: (state, action) => {

            return { ...state, loading: false }
        },
        [createProduct.rejected]: (state, action) => {

            console.log(action.error.message)
            return { ...state, loading: false, error: action.error.message }
        },
        // ======= edit ======= //
        [editProduct.pending]: (state) => {
            return { ...state, loading: true }
        },
        [editProduct.fulfilled]: (state, action) => {
            return { ...state, loading: false }
        },
        [editProduct.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error.message }
        },
        // ======= delete ======= //
        [deleteProduct.pending]: (state) => {
            return { ...state, loading: true, error: null }
        },
        [deleteProduct.fulfilled]: (state, action) => {
            return { ...state, loading: false }
        },
        [deleteProduct.rejected]: (state, action) => {
            console.log(action.error.message)
            return { ...state, loading: false, error: action.error.message }
        },
    }
})


export default productSlice.reducer;
