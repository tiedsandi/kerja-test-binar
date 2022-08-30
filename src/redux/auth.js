import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import testbinarapi from './api/testbinarapi';

export const AuthLogin = createAsyncThunk(
    'auth/AuthLogin',
    async (data) => {
        const res = await testbinarapi.post('/auth/login', data);
        if (res.data.errors == null) {
            localStorage.setItem('token', res.data.result.access_token)
        } else {
            throw new Error('email / password wrong');
        }
    }
)

export const AuthRegister = createAsyncThunk(
    'auth/AuthRegister',
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
    loading: false,
    error: null,
    success: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [AuthLogin.pending]: (state) => {
            return { ...state, loading: true }
        },
        [AuthLogin.fulfilled]: (state, action) => {
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 2000);
            return { ...state, loading: false, success: 'login successed' }
        },
        [AuthLogin.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error.message }
        },
        [AuthRegister.pending]: (state) => {
            return { ...state, loading: true, error: null }
        },
        [AuthRegister.fulfilled]: (state, action) => {
            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
            return { ...state, loading: false, success: 'please login' }
        },
        [AuthRegister.rejected]: (state, action) => {
            console.log(action.error.message)
            return { ...state, loading: false, error: action.error.message }
        },
    }
})


export default authSlice.reducer;
