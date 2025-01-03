import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async (info) => { // info er vitore AdminLogin.jsx file er state gulo add hocce
        console.log(info);
        try {

        } catch (error) {

        }
    }
);

export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: '',
    },
    reducers: {

    },
    extraReducers: () => {

    }
});

export default authReducer.reducer;