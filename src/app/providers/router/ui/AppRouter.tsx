import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/page/PageLoader/PageLoader';

import { createRouter } from '../config/createRouter';

export const AppRouter = memo(() => { // удалить
    return (
        <Routes>
            {Object.values(createRouter).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="pageWrapper">
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    );
});
