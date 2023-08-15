import classNames from 'classnames';
import { CSSProperties } from 'react';

import s from './Skeleton.module.scss';

export const Skeleton = ({
    className,
    width,
    height,
    border,
}: {
    className?: string;
    width?: string;
    height?: string;
    border?: string;
}) => {
    const styles: CSSProperties = {
        ...width && { width },
        ...height && { height },
        ...border && { borderRadius: border },
    };

    return (
        <div
            className={classNames(s.skeleton, {}, [className])}
            style={styles}
        />
    );
};
