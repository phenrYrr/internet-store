import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from 'entities/Product/model/types/product';

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://test-frontend.dev.int.perx.ru/api',
    }),
    endpoints: (builder) => ({
        getGoods: builder.query<Product[], string | void>({
            query: (dealers) =>
                dealers ? `/goods/?dealers=${dealers}` : '/goods/',
        }),
        getDealers: builder.query<string[], void>({
            query: () => '/dealers/',
        }),
    }),
});

export const { useGetGoodsQuery, useGetDealersQuery } = goodsApi;
