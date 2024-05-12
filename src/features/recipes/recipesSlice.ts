import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RecipeState } from '../../types';

const initialState: RecipeState = {
    imageSize: ["SMALL"]
};

export const recipesSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateFilters: (state, action: PayloadAction<Partial<RecipeState>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateFilters } = recipesSlice.actions;
export default recipesSlice.reducer;
