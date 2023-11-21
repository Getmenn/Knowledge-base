import classNames from 'classnames';

import { sidebarItems } from '../../model/sidebarItems';
import { SidebarFolder } from '../SidebarFolder/SidebarFolder';
import s from './Sidebar.module.scss';

interface IProps{
    className?: string;
}

export const Sidebar = ({ className }: IProps) => {

    return (
        <div className={classNames(s.sidebar, className)}>
            {sidebarItems.map((item) => <SidebarFolder key={item.id} folder={item} />)}
        </div>
    );
};
