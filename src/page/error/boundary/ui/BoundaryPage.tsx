import { useNavigate } from 'react-router-dom';

import robot from '@/shared/assets/images/404ErrorRobot.png';
import { PAGES } from '@/shared/constants';
import { Button } from '@/shared/ui/button/Button';

import s from './BoundaryPage.module.scss';

/**
 * Страница с ошибкой
 */
export const BoundaryPage = () => {
    const navigate = useNavigate();

    return (
        <div className={s.BoundaryPage}>
            <span>Ошибка</span>
            <b>error application</b>
            <img src={robot} alt="404 imag" />
            <div className={s.btnBox}>
                <Button size="medium" onClick={() => navigate(PAGES.content.main)}>
                    На главную
                </Button>
            </div>
        </div>
    );
};
