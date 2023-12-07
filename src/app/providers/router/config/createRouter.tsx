import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { Error404Page } from '@/page/error/404';
import { Error500Page } from '@/page/error/500';
import { PAGES } from '@/shared/constants';

import { Loadable } from '../util/loadable';

const MainPage = lazy(() => import('@/page/main'));
// const AdminPage = Loadable(lazy(async () => import('@/page/content/admin')), <AdminPageSkeleton />);

export const createRouter = () => [
    {
        path: PAGES.baseURL,
        element: <MainPage />,
        errorElement: <Navigate to={PAGES.error.error404} />,
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
