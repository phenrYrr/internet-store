import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from 'entities/Product/model/types/product';
import { ThunkConfig } from 'app/provider/StoreProvider';

export const fetchProductList = createAsyncThunk<
    Product[],
    string,
    ThunkConfig<string>
>('MainPage/fetchProductList', async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Product[]>('/');

        if (!response.data) {
            throw new Error();
        }

        console.log(response.data);
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
