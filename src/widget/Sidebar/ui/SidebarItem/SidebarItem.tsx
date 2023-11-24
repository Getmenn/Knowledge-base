import classNames from 'classnames';

import { IChildrenType } from '../../model/sidebarItems';
import s from './SidebarItem.module.scss';

interface IProps{
    className?: string;
    item: IChildrenType;
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
