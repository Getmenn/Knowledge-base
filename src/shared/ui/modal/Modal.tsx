import classNames from 'classnames';
import { ReactNode, useCallback, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useClickOutside } from '@/shared/lib/hooks/useClickOutside';
import { useKeyDown } from '@/shared/lib/hooks/useKeyDown/useKeyDown';

import s from './Modal.module.scss';

export const Modal = ({
    className,
    children,
    onClose,
    isOpen,
}: {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}) => {
    useClickOutside(() => onClose(), ['modalContent']);

    useKeyDown({ key: 'Escape', callback: onClose });

    const elModal = useMemo(() => (
        <div className={classNames(s.modal, { [s.opened]: isOpen }, className)}>
            <div className={s.overlay}>
                <div id="modalContent" className={classNames(s.content, className)}>
                    {children}
                </div>
            </div>
        </div>
    ), [children, className, isOpen]);

    return createPortal(elModal, document.body);
};
