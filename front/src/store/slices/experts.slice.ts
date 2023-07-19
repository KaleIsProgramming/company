import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Expert {
    imie: string;
    nazwisko: string;
    rola: string;
    opis: string;
    zdjecie: string;
}

interface ExpertsData {
    experts: Expert[]
}

const initialState: ExpertsData = {
    experts: []
};

export const fetchExperts = createAsyncThunk(
    "experts/getExperts",
    async (payload, {signal}) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => {
            source.cancel();
        });

        const experts = axios('http://localhost:3001/experts');
        return experts;
    }
)

const expertsSlice = createSlice({
    name: 'experts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchExperts.fulfilled, (state, {payload}: any) => {
            state.experts = payload.data.data[0];
        });
    }
});

export default expertsSlice.reducer;