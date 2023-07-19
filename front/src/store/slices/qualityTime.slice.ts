import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface QualityTime {
    opis: string;
}

const initialState: QualityTime = {
    opis: '' 
};

export const fetchQualityTime = createAsyncThunk(
    "qualityTime/getDescription",
    async (payload, {signal}) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => {
            source.cancel();
        });

        const description = axios('http://localhost:3001/qualityTime');
        return description;
    }
)

const expertsSlice = createSlice({
    name: 'qualityTime',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchQualityTime.fulfilled, (state, {payload}: any) => {
            state.opis = payload.data.data[0][0].opis;
        });
    }
});

export default expertsSlice.reducer;