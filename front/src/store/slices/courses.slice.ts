import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Courses {
    id: number;
    nazwa: string;
    cena: number;
    data: string;
    opis: number;
    platforma: string;
    koordynator: string;
    mail: string;
    prelegenci: string;
    regulamin: string;
}

interface CoursesData {
    courses: Courses[]
}

const initialState: CoursesData = {
    courses: []
};

export const fetchCourses = createAsyncThunk(
    "courses/getCourses",
    async (payload, {signal}) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => {
            source.cancel();
        });

        const courses = axios('http://localhost:3001/courses');
        return courses
    }
)

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchCourses.fulfilled, (state, {payload}: any) => {
            state.courses = payload.data.id;
        });
    }
});

export default coursesSlice.reducer;