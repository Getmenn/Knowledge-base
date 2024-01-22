import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getArticleInfo } from '@/shared/api/services/article/getArticleInfo';

import s from './infoPage.module.scss';

export const InfoPage = () => {
    const params = useParams();

    console.log(params);

    const getInfo = async () => {
        const res = await getArticleInfo();
    };

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div className={s.infoPage}>
            <h1>Hello</h1>
        </div>
    );
};
