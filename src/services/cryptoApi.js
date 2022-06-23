import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '10aaebd103mshfdd0e7d92a2ac78p109f67jsneac313f6cf85'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url,headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),

        getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
    }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;
