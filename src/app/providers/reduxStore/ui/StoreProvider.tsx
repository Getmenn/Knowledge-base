import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { createReduxStore } from '../config/createReduxStore';

/**
 * Обертка ReduxStore
 * Принимает @children - чилдрен компонент
 * Возвращает @children обернутый в провайдер
 */
export const StoreProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        // mainReducer,
    };

    const navigate = useNavigate();

    const store = useMemo(() => createReduxStore<StateSchema>(rootReducers), []);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
