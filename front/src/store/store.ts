import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import articlesSlice from "./slices/articles.slice";
import coursesSlice from "./slices/courses.slice";
import companySlice from "./slices/company.slice";
import userSlice from "./slices/user.slice";
import registrationesSlice from "./slices/registrationes.slice";
import adminSlice from "./slices/admin.slice";
import expertsSlice from './slices/experts.slice';
import qualityTime from "./slices/qualityTime.slice";
import servicesSlice from "./slices/services.slice";

const store = configureStore({
    reducer: {
        articlesSlice,
        coursesSlice,
        companySlice,
        userSlice,
        registrationesSlice,
        adminSlice,
        expertsSlice,
        qualityTime,
        servicesSlice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;