// import { AppRouter } from './providers/router';
import './styles/index.scss';

import classNames from 'classnames';
import { Suspense } from 'react';

import { Sidebar } from '@/widget/Sidebar';

import { AppRouter } from './providers/router/ui/AppRouter';

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
