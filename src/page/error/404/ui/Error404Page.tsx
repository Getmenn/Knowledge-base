import { useNavigate } from 'react-router-dom';

import robot from '@/shared/assets/images/404ErrorRobot.png';
import { PAGES } from '@/shared/constants';
import { Button } from '@/shared/ui';

import s from './Error404Page.module.scss';

/**
 * Страница с ошибкой
 */
export const Error404Page = () => {
    const navigate = useNavigate();

    return (
        <div className={s.error404Page}>
            <span>404</span>
            <b>Not found</b>
            <img src={robot} alt="404 imag" />
            <div className={s.btnBox}>
                <Button size="medium" onClick={() => navigate(PAGES.content.main)}>
                    На главную
                </Button>
            </div>
        </div>
    );
};
