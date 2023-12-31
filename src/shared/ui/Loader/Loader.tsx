import classNames from 'classnames';

import s from './Loader.module.scss';

interface IProps{
    className?: string;
}

export const Loader = (props: IProps) => {
    const { className } = props;

    return (
        <div className={classNames(s.loader, className)} />
    );
};
