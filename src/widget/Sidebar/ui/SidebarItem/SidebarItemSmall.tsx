import classNames from 'classnames';

import { IContentType } from '../../model/sidebarItems';
import s from './sidebarItemSmall.module.scss';

interface IProps{
    className?: string;
    item: IContentType;
}

export const SidebarItemSmall = ({
    className,
    item,
}: IProps) => {
    return (
        <div className={classNames(s.sidebarItemSmall, className)}>
            <span className={s.line} />
            {item.name}
        </div>
    );
};
