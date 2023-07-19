import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Company {
    id: number;
    nazwa: string;
    NIP: number;
    adres: string;
    kod_pocztowy: number;
    miasto: string;
    telefon: number;
    strona_internetowa: string;
}

interface CompaniesData {
    companies: Company[]
}

const initialState: CompaniesData = {
    companies: []
};

export const fetchCompanies = createAsyncThunk(
    "company/getCompanies",
    async (payload, {signal}) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => {
            source.cancel();
        });

        const companies = axios('http://localhost:3001/companies');
        return companies
    }
)

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchCompanies.fulfilled, (state, {payload}: any) => {
            state.companies = payload.data.id;
        });
    }
});

export default companySlice.reducer;