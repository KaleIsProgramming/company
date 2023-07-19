import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface User {
    id: number;
    nazwa: string;
    opis: string;
    stworzony: string;
    cena: number;
}

interface UsersData {
    users: User[]
}

const initialState: UsersData = {
    users: []
};

export const fetchUsers = createAsyncThunk(
    "user/getUsers",
    async (payload, {signal}) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => {
            source.cancel();
        });

        const users = axios('http://localhost:3001/users');
        return users
    }
)

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, {payload}: any) => {
            state.users = payload.data.id;
        });
    }
});

export default usersSlice.reducer;