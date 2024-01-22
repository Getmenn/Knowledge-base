import { IArticleList } from '@/entities/ArticleList/model/types/articleListSchema';

import { $api } from '../../config/api/api';

export const getArticleInfo = async () => {
    try {
        const response: IResponse<IArticleList[]> = await $api.get('/articleList/css'); // доделать, не работает

        return response;
    } catch (error) {
        console.log(error);
    }

    // if (!response) {
    //     throw Error(response);
    // }
};
