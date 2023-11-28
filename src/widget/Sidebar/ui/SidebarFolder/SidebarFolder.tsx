import classNames from 'classnames';
import { useState } from 'react';

import { IArticleList, IArticleListItem } from '@/entities/ArticleList/model/types/articleListSchema';
import ArrowSvg from '@/shared/assets/svg/arrow.svg';

import { IChildrenType, IContentType, ISidebarItems } from '../../model/sidebarItems';
import { SidebarItemSmall } from '../SidebarItem/SidebarItemSmall';
// import { SidebarItem } from '../SidebarItem/SidebarItem';
import s from './SidebarFolder.module.scss';

interface IProps{
    className?: string;
    folder: IArticleList;
}

interface ISidebarItem{
    item: IChildrenType;
}

const SidebarItem = ({
    item,
}: ISidebarItem) => {
    const [active, setActive] = useState(false);

    return (
        <div className={classNames(s.sidebarItem, { [s.folder]: item.children })}>
            <div
                className={s.name}
                onClick={() => setActive(!active)}
            >
                {item.children && (
                    <ArrowSvg
                        className={classNames(s.arrow, { [s.active]: active })}
                        onClick={() => setActive(!active)}
                    />
                )}
                <span className={s.line} />
                {item.name}
            </div>
            {item.children && (
                <div className={classNames(s.folderChildren, { [s.active]: active })}>
                    {item.children.map((item: IContentType) => {
                        return <SidebarItemSmall key={item.id} item={item} />;
                    })}
                </div>
            )}
        </div>
    );
};

export const SidebarFolder = ({
    className,
    folder,
}: IProps) => {
    const [active, setActive] = useState(false);

    return (
        <div
            className={classNames(s.sidebarFolder, className, { [s.active]: active })}
        >
            <div className={s.nameItem}>
                <div>
                    <ArrowSvg
                        className={classNames(s.arrow, { [s.active]: active })}
                        onClick={() => setActive(!active)}
                    />
                </div>
                <span
                    onClick={() => setActive(!active)}
                >
                    {Object.keys(folder)[0]}
                </span>
            </div>
            <div className={classNames(s.folderChildren, { [s.active]: active })}>
                {Object.values(folder)[0].map((item: IContentType) => {
                    return <SidebarItem key={item.id} item={item} />;
                })}
            </div>
        </div>
    );
};
