import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticleListSchema, IArticleList } from '../types/articleListSchema';

const initialState: ArticleListSchema = {
    articleList: null,
};

export const articleListSlice = createSlice({
    name: 'articleList',
    initialState,
    reducers: {
        changeArticleList: (state, action: PayloadAction<IArticleList>) => {
            state.articleList = action.payload;
        },

    },
});

export const {
    actions: articleListActions,
    reducer: articleListReducer,
} = articleListSlice;
