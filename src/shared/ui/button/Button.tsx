import classNames from 'classnames';
import { ButtonHTMLAttributes, memo, ReactNode, useMemo } from 'react';

import s from './Button.module.scss';

export type ButtonColorType = 'red' | 'green' | 'gray' | 'light-gray' | 'yellow' | 'transparent';

export const Button = memo(({
    className,
    modes = [],
    children,
    color = 'gray',
    size = 'small',
    disabled,
    ...otherProps
}: {
    className?: string;
    color?: ButtonColorType;
    modes?: Array<'outlet'>;
    size?: 'small' | 'medium';
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const modeList = useMemo(() => modes.map((el) => s[el]), [modes]);

    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(s.button, s[color], s[size], modeList, { [s.disabled]: disabled }, className)}
            {...otherProps}
        >
            {children}
        </button>
    );
});
