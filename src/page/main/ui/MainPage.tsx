// import { AppRouter } from './providers/router';
import classNames from 'classnames';
import { ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppRouter } from '@/app/providers/router/ui/appRouter';
import { Sidebar } from '@/widget/sidebar';

import s from './mainPage.module.scss';

export const MainPage = () => {
    return (
        <div className={s.app}>
            <Suspense fallback="">
                <div className={s.contentPage}>
                    <Sidebar />
                    <Outlet />
                </div>
            </Suspense>
        </div>
    );
};
