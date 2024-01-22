import classNames from 'classnames';

import { IContentType } from '../../model/sidebarItems';
import s from './sidebarItemSmall.module.scss';

interface IProps{
    className?: string;
    item: IContentType;
    onClick: (id: number) => void;
}

export const SidebarItemSmall = ({
    className,
    item,
    onClick,
}: IProps) => {
    return (
        <div className={classNames(s.sidebarItemSmall, className)} onClick={() => onClick(item.id)}>
            <span className={s.line} />
            {item.name}
        </div>
    );
};
