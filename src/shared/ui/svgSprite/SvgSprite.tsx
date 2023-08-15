import classNames from 'classnames';
import { memo } from 'react';

import { svgItem, SvgType } from '@/shared/ui/svgSprite/config';

/**
 * Компонент для svg
 * Принимает пропсы:
 * @className - (не обязательный) className картинки
 * @icon - тип svg
 */
export const SvgSprite = memo(({
    className,
    icon,
    ...otherProps
}: {
    className?: string;
    icon: SvgType;
}) => {
    const SvgIcon = svgItem[icon];

    return <SvgIcon className={classNames(className)} {...otherProps} />;
});
