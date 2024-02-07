import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-key': import.meta.env.VITE_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': import.meta.env.VITE_APP_CRYPTO_RAPIDAPI_HOST,
  };

export const newsApi = createApi({
    reducerPath:'newsApi',
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_APP_CRYPTO_API_URL, headers: cryptoApiHeaders}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: (count) => `/coins?limit=${count}`,
        }),
    })

});

