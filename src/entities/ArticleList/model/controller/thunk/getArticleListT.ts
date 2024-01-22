import { getArticleList } from '@/shared/api/services/article/getArticleList';

import { articleListActions } from '../../slice/articleListSlice';

export const getArticleListT = (): ThunkAction => async (dispatch, getState, extra) => {
    try {
        const articleList = await getArticleList();

        if (articleList) {
            dispatch(articleListActions.changeArticleList(articleList));
        }
    } catch (err) {
        console.error(err);
    }
};
