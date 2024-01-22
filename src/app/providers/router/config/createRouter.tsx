import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { Error404Page } from '@/page/error/404';
import { Error500Page } from '@/page/error/500';
import { InfoPage } from '@/page/info';
import { PAGES } from '@/shared/constants';

const MainPage = lazy(() => import('@/page/main'));

export const createRouter = () => [
    {
        path: PAGES.baseURL,
        element: <MainPage />,
        errorElement: <Navigate to={PAGES.error.error404} />,
        children: [
            {
                path: PAGES.baseURL,
                element: <h1>MAIN</h1>,
                errorElement: <Navigate to={PAGES.error.error404} />,
            },
            {
                path: PAGES.infoPage,
                element: <InfoPage />,
                errorElement: <Navigate to={PAGES.error.error404} />,
            },
            {
                path: PAGES.infoPageFolder,
                element: <InfoPage />,
                errorElement: <Navigate to={PAGES.error.error404} />,
            },
        ],
    },
    {
        path: PAGES.error.error404,
        element: <Error404Page />,
        errorElement: <Navigate to={PAGES.error.error404} />,
    },
    {
        path: PAGES.error.error500,
        element: <Error500Page />,
        errorElement: <Navigate to={PAGES.error.error404} />,
    },
    {
        path: '*',
        element: <Error404Page />,
        errorElement: <Navigate to={PAGES.error.error404} />,
    },
];
