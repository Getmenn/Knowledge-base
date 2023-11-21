import classNames from 'classnames';

import { childrenType } from '../../model/sidebarItems';
import s from './SidebarItem.module.scss';

interface IProps{
    className?: string;
    item: childrenType;
}

export const SidebarItem = ({
    className,
    item,
}: IProps) => {
    return (
        <div className={classNames(s.sidebarItem, className)}>
            <span />
            {item.name}
        </div>
    );
};
