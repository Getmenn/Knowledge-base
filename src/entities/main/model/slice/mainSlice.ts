import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mainSchema } from '../types/main';

const initialState: mainSchema = {
    counter: 0,
    loading: false,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<any>) => {
            state.counter ++;
        },
        decrement: (state) => {
            state.counter --
        },
    }
})

export const {
    actions: mainActions,
    reducer: mainReducer,
} = mainSlice;