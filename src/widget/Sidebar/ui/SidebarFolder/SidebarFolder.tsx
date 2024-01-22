import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IArticleList, IArticleListItem } from '@/entities/ArticleList/model/types/articleListSchema';
import ArrowSvg from '@/shared/assets/svg/arrow.svg';

import { IChildrenType, IContentType } from '../../model/sidebarItems';
import { SidebarItemSmall } from '../sidebarItem/sidebarItemSmall';
import s from './sidebarFolder.module.scss';

interface IProps{
    className?: string;
    folder?: string;
    content?: IArticleListItem[];
}

interface ISidebarItem{
    item: IChildrenType;
    folder?: string;
}

const SidebarItem = ({
    item,
    folder,
}: ISidebarItem) => {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const handleActiveArticle = () => {
        setActive(!active);
        if (!item.children) {
            navigate(`/${folder}/${item.id}`);
        }
    };

    const handleActiveArticleSmall = (id: number) => {
        navigate(`/${folder}/${id}/${item.id}`);
    };

    return (
        <div className={classNames(s.sidebarItem, { [s.folder]: item.children })}>
            <div
                className={s.name}
                onClick={handleActiveArticle}
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
                        return (
                            <SidebarItemSmall
                                key={item.id}
                                item={item}
                                onClick={handleActiveArticleSmall}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export const SidebarFolder = ({
    className,
    folder,
    content,
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
                    {folder}
                </span>
            </div>
            <div className={classNames(s.folderChildren, { [s.active]: active })}>
                {content?.map((item: IContentType) => {
                    return <SidebarItem key={item.id} item={item} folder={folder} />;
                })}
            </div>
        </div>
    );
};
