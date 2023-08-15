import classNames from 'classnames';
import { ReactNode, useState } from 'react';

import { SvgSprite } from '@/shared/ui';

import s from './Tooltip.module.scss';

export const Tooltip = ({
    title,
    className,
    children,
}: {
    title: string;
    children: ReactNode;
    className?: string;
}) => {
    const [visableExtend, setVisableExtend] = useState(false);

    return (
        <div className={classNames(s.tooltip, className && s[className])}>
            <div
                className={s.titleBox}
                onMouseEnter={() => setVisableExtend(true)}
                onMouseLeave={() => setVisableExtend(false)}
            >
                <SvgSprite icon="exclamation" />
                <h3>{title}</h3>
            </div>

            {visableExtend && (
                <div className={s.extendsBox}>
                    {children}
                </div>
            )}
        </div>
    );
};
