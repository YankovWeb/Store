import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Product} from '../../types';

const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
});

export const {useGetProductsQuery} = api;
export default api;
