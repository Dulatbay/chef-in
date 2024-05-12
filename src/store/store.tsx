import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { recipesApi } from '../services/recipes.tsx';
import recipesSlice from "../features/recipes/recipesSlice.ts";

export const store = configureStore({
    reducer: {
        [recipesApi.reducerPath]: recipesApi.reducer,
        filters: recipesSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(recipesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
