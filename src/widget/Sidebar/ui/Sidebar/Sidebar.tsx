import classNames from 'classnames';
import { useEffect } from 'react';

import { getArticleList } from '@/shared/api/services/getArticleList/getArticleList';

import { sidebarItems } from '../../model/sidebarItems';
import { SidebarFolder } from '../SidebarFolder/SidebarFolder';
import s from './Sidebar.module.scss';

interface IProps{
    className?: string;
}

export const Sidebar = ({ className }: IProps) => {
    useEffect(() => {
        getArticleList();
    }, []);

    return (
        <div className={classNames(s.sidebar, className)}>
            {sidebarItems.map((item) => <SidebarFolder key={item.id} folder={item} />)}
        </div>
    );
};
