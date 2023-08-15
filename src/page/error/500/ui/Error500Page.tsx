import { useNavigate } from 'react-router-dom';

import server from '@/shared/assets/images/500ErrorServer.png';
import { Button } from '@/shared/ui';

import s from './Error500Page.module.scss';

/**
 * Страница с ошибкой
 */
export const Error500Page = () => {
    const navigate = useNavigate();

    return (
        <div className={s.error500Page}>
            <span>500</span>
            <b>
                Непредвиденная
                <br />
                ошибка
            </b>
            <img src={server} alt="500 imag" />
            <div className={s.btnBox}>
                <Button size="medium" onClick={() => navigate(-1)}>
                    Назад
                </Button>
            </div>
        </div>
    );
};
