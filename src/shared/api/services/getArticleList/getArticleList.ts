import { $api } from '../../config/api/api';

export const getArticleList = async () => {
    const response = await $api.get('/articleList');

    if (!response) {
        throw Error(response);
    }

    return response;
};
