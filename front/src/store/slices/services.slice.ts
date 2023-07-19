import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Service {
    nazwa: string;
    text: string;
}

export interface Services {
    services: Service[];
}

const initialState: Services = {
    services: [] 
};

export const fetchServices = createAsyncThunk(
    "services/getServices",
    async (payload, {signal}) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => {
            source.cancel();
        });

        const services = axios('http://localhost:3001/services');
        return services;
    }
)

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchServices.fulfilled, (state, {payload}: any) => {
            state.services = payload.data.data[0];
        });
    }
});

export default servicesSlice.reducer;