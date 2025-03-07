import { StateSchema } from 'app/provider/StoreProvider';

export const getMainPageData = (state: StateSchema) => state.MainPage.data;
export const getMainPageIsLoading = (state: StateSchema) =>
    state.MainPage.isLoading;
export const getMainPageError = (state: StateSchema) => state.MainPage.error;
