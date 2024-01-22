import classNames from 'classnames';
import { useEffect } from 'react';

import { getArticleListSelector } from '@/entities/ArticleList';
import { getArticleListT } from '@/entities/ArticleList/model/controller/thunk/getArticleListT';
import { folderTypes } from '@/entities/ArticleList/model/types/articleListSchema';
import { getArticleList } from '@/shared/api/services/article/getArticleList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';

// import { sidebarItems } from '../../model/sidebarItems';
import { SidebarFolder } from '../sidebarFolder/sidebarFolder';
import s from './sidebar.module.scss';

interface IProps{
    className?: string;
}

export const Sidebar = ({ className }: IProps) => {
    const dispatch = useAppDispatch();
    const articleList = useAppSelector(getArticleListSelector);
    console.log('Sidebar');

    useEffect(() => {
        dispatch(getArticleListT());
    }, [dispatch]);

    return (
        <div className={classNames(s.sidebar, className)}>
            {articleList && Object.keys(articleList).map((item, index) => (
                <SidebarFolder
                    key={index}
                    folder={item}
                    content={articleList[item]}
                />
            ))}
        </div>
    );
};
