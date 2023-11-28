import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { url } from 'inspector'
import { IProductFromRapid, ServerResponse } from '../models/models'
  

export const productsApi = createApi({
    reducerPath: 'products/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kohls.p.rapidapi.com/',
        prepareHeaders:             
        headers => {
            headers.set('X-RapidAPI-Key', 'abdb108e63msh63c3e0348666feep11d309jsn5512031f3b65');
            headers.set('X-RapidAPI-Host', 'kohls.p.rapidapi.com');
            return headers;
        },
    }),
    refetchOnFocus: true,
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProductFromRapid[], string>({
            query: (search: string) => ({
                url: `products/list`,
                params: {
                    offset: 1, keyword: search, dimensionValueID: 'AgeAppropriate:Teens'
                }
            }),

        transformResponse: (response: ServerResponse) => response.payload.products
        })
    })
})

export const { useFetchAllProductsQuery, useLazyFetchAllProductsQuery } = productsApi;