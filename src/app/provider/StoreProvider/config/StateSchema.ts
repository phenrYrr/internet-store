import {
    ReducersMapObject,
    AnyAction,
    Reducer,
    EnhancedStore,
    CombinedState,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { productSchema } from 'entities/Product/model/types/productSchema';
import { MainPageSchema } from 'pages/MainPage/model/types/mainPageSchema';
import { goodsApi } from 'shared/api/api';

export interface StateSchema {
    product: productSchema;
    MainPage: MainPageSchema;
    [goodsApi.reducerPath]: ReturnType<typeof goodsApi.reducer>;
}

export type StateSchemaKey = keyof StateSchema;
type OptionalRecord<K extends keyof any, T> = Partial<Record<K, T>>;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: typeof goodsApi;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
