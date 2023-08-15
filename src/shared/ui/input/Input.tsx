import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback } from 'react';

import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

/**
 * Компонент input
 * Все необязательные пропсы:
 * @className - className
 * @Icon - компонент картинки
 * @label - текст для названия input
 * @value - начальное значение
 * @onChange - функция для изменения
 */
export const Input = memo(({
    className,
    Icon,
    label,
    value,
    name,
    type = 'text',
    id,
    onChange,
    ...otherProps
}: {
    className?: string;
    Icon?: ReactElement;
    label?: string;
    value?: string | number;
    onChange?: (value: string) => void;
} & HTMLInputProps) => {
    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);

    return (
        <div className={classNames(s.input, className)}>
            <label
                className={s.label}
                htmlFor={name}
            >
                {label}
            </label>
            <div className={s.blockInput}>
                {Icon && <div className={s.image}>{Icon}</div>}
                <input
                    className={classNames({ [s.paddingLeft]: !!Icon })}
                    value={value}
                    type={type}
                    id={id}
                    onChange={onChangeHandler}
                    {...otherProps}
                />
            </div>
        </div>
    );
});
