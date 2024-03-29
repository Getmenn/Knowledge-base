import { IArticleList } from '@/entities/ArticleList/model/types/articleListSchema';

import { $api } from '../../config/api/api';

export const getArticleList = async () => {
    const response = await $api.get<IArticleList>('/articleList');

    if (!response) {
        throw Error(response);
    }

    return response.data;
};
