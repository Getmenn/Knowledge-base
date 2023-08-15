import classNames from 'classnames';
import { useState } from 'react';

import ArrowSvg from '@/shared/assets/svg/arrow.svg';

import { childrenType, ISidebarItems } from '../../model/sidebarItems';
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

    const handleOpen = () => {
        if (active) {
            setAnimation(true);
            console.log(1);

            setTimeout(() => {
                console.log(2);

                setActive(false);
            }, 500);
        } else {
            setAnimation(false);
            setActive(true);
        }
    };

    console.log(active);

    return (
        <div
            className={classNames(s.sidebarFolder, className, { [s.active]: animation })}
            onClick={handleOpen}
        >
            <div className={s.nameItem}>
                <div>
                    <ArrowSvg className={classNames(s.arrow, { [s.active]: animation })} />
                </div>
                <span>{folder.name}</span>
            </div>
            {active && folder.children
            && (
                <div className={classNames(s.folderChildren, { [s.active]: active })}>
                    {folder.children?.map((item) => {
                        return <SidebarItem key={item.id} item={item} />;
                    })}
                </div>
            )}
        </div>
    );
};
