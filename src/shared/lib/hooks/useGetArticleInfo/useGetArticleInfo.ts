import { useEffect, useState } from 'react';

import { IArticleList, IArticleListItem } from '@/entities/ArticleList/model/types/articleListSchema';

export interface IParams {
    folder?: string;
    id?: string;
    idFolder?: string
}

export const useGetArticleInfo = (ArticleList: IArticleList | null, { folder, id, idFolder }: IParams) => {
    const [resp, setResp] = useState<IArticleListItem | undefined>();

    useEffect(() => {
        if (!ArticleList) return setResp(undefined);
        if (idFolder && folder && id) {
            const res = ArticleList[folder].find((el) => el.id === +idFolder);
            setResp(res?.children?.find((el) => el.id === +id));
        } else if (id && folder) {
            setResp(ArticleList[folder].find((el) => el.id === +id));
        }
    }, [ArticleList, folder, id, idFolder]);

    return resp;
};
