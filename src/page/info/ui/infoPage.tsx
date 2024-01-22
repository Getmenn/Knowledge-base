import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getArticleListSelector } from '@/entities/ArticleList';
import { getArticleInfo } from '@/shared/api/services/article/getArticleInfo';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { IParams, useGetArticleInfo } from '@/shared/lib/hooks/useGetArticleInfo/useGetArticleInfo';

import s from './infoPage.module.scss';

export const InfoPage = () => {
    const params: IParams = useParams();
    const ArticleList = useAppSelector(getArticleListSelector);
    const info = useGetArticleInfo(ArticleList, params);

    return (
        <div className={s.infoPage}>
            <h1>{JSON.stringify(info)}</h1>
        </div>
    );
};
