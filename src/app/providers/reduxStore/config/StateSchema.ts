import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';

import { createReduxStore } from '@/app/providers/reduxStore/config/createReduxStore';
// import { mainReducer, mainSchema } from '@/entities/main';

export interface StateSchema {
    // mainReducer: mainSchema;
}

// interface AsyncState {
//     // usersReducer?: UsersSchema;
// }
// export type StateSchema = RootState;
// export interface StateSchema extends RootState, AsyncState {}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: NavigateFunction;
}

export type AppDispatch = ReturnType<typeof createReduxStore<StateSchema>>['dispatch'];
export type ThunkAction = (dispatch: AppDispatch, getState: () => StateSchema, extra?: ThunkExtraArg) => void

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
