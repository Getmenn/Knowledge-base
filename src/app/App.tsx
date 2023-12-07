// import { AppRouter } from './providers/router';
import './styles/index.scss';

import classNames from 'classnames';
import { Suspense } from 'react';

import { Sidebar } from '@/widget/sidebar';

import { AppRouter } from './providers/router/ui/appRouter';

export const App = () => {
    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <div className="contentPage">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
