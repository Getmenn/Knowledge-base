import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticleListSchema } from '../types/articleListSchema';

const initialState: ArticleListSchema = {
    css: null,
    react: null,
    javaScript: null,
};

export const articleListSlice = createSlice({
    name: 'articleList',
    initialState,
    reducers: {

    },
});

export const {
    actions: articleListActions,
    reducer: articleListReducer,
} = articleListSlice;
