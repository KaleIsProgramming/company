import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RegistrationeData } from '../../components/Courses';

export interface Registratione {
    id: number;
    szkolenie_id: number;
    imie: string;
    nazwisko: string;
    stanowisko: string;
    nazwa_firmy: string;
    nip_firmy: string;
    ulica: string;
    kod_pocztowy: string;
    miasto: string;
    tel_firmy: string;
    tel_uzytkownika: string;
    mail_zglaszajacego: string;
    mail_uczestnika: string;
    strona_www: string;
    uwagi: string;
    nocleg: string;
    rabat: string;
    rabat_inny: string;
    r1: boolean;
    r2: boolean;
    r3: boolean;
    r4: boolean;
}

interface RegistrationesData {
    registrationes: Registratione[]
}

const initialState: RegistrationesData = {
    registrationes: []
};

export const addRegistrationes = createAsyncThunk(
    "registrationes/addRegistrationes",
    async (payload: RegistrationeData, {signal}) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => {
            source.cancel();
        });

        console.log(payload)

        const registrationes = axios('http://localhost:3001/create-registration', {
            method: 'POST',

            data: payload
        });
        return registrationes
    }
)

const registrationesSlice = createSlice({
    name: 'registrationes',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(addRegistrationes.fulfilled, (state, {payload}: any) => {
            state.registrationes = payload.data.id;
        });
    }
});

export default registrationesSlice.reducer;