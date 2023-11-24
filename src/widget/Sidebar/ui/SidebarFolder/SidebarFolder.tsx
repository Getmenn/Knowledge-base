import classNames from 'classnames';
import { useState } from 'react';

import ArrowSvg from '@/shared/assets/svg/arrow.svg';

import { IChildrenType, ISidebarItems } from '../../model/sidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import s from './SidebarFolder.module.scss';

interface IProps{
    className?: string;
    folder: ISidebarItems;
}

export const SidebarFolder = ({
    className,
    folder,
}: IProps) => {
    const [active, setActive] = useState(false);

    const [animation, setAnimation] = useState(false);

    return (
        <div
            className={classNames(s.sidebarFolder, className, { [s.active]: active })}
            onClick={() => setActive(!active)}
        >
            <div className={s.nameItem}>
                <div>
                    <ArrowSvg className={classNames(s.arrow, { [s.active]: active })} />
                </div>
                <span>{folder.name}</span>
            </div>
            <div className={classNames(s.folderChildren, { [s.active]: active })}>
                {folder.children?.map((item) => {
                    return <SidebarItem key={item.id} item={item} />;
                })}
            </div>
        </div>
    );
};
