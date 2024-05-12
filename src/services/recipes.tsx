import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RecipesResponse } from '../types';

const app_id = "0c1e8c21";
const app_key = "370062603582ae47fb4a2dc20465a557";
const baseUrl = "https://api.edamam.com/api/";
const type = "public"
const beta = true


export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getRecipes: builder.query<RecipesResponse, Partial<{ q?: string; ingr?: string; cuisineType?: string[]; mealType?: string[]; dishType?: string[]; imageSize?: string[] }>>({
            query: (filters) => ({
                url: 'recipes/v2',
                params: {
                    ...filters,
                    app_id,
                    app_key,
                    type,
                    beta
                },
            })
        }),
    }),
});

export const { useGetRecipesQuery } = recipesApi;
