import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export interface Article {
    id: number;
    nazwa: string;
    tresc: string;
    utworzono: string;
    zdjecie: string;
}

interface ArticlesData {
    articles: Article[];
}

const initialState: ArticlesData = {
    articles: []
};

export const fetchArticles = createAsyncThunk(
    "articles/getArticles",
    async (payload, {signal}) => {
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => {
            source.cancel();
        });
        const articles = axios('http://localhost:3001/articles');

        return articles
        
    }
)

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchArticles.fulfilled, (state, {payload}: any) => {
            state.articles = payload.data.data[0];
        });
    }
});

export default articlesSlice.reducer;