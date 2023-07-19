import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export interface admin {
    id: number;
    nazwa: string;
    tresc: string;
    utworzono: string;
    zdjecie: string;
}

interface adminData {
    admin: admin[];
}

const initialState: adminData = {
    admin: []
};

export const postLogin = createAsyncThunk(
    "admin/postLogin",
    async (payload, {signal}) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => {
            source.cancel();
        });
        const login = axios('http://localhost:3001/articles', {
            data: ""
        });

        return login
        
    }
)

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(postLogin.fulfilled, (state, {payload}: any) => {
            state.admin = payload.data.data[0];
        });
    }
});

export default adminSlice.reducer;