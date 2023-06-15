import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const url = 'https://jsonplaceholder.typicode.com/posts';

export const api = createApi({
    reducerPath: 'cards',
    baseQuery: fetchBaseQuery({ baseUrl: 'ttps://jsonplaceholder.typicode.com/posts/' }),
    endpoints: (builder) => ({
        likePost: (builder.query({
            query: (id) => ({
                url: 'ttps://jsonplaceholder.typicode.com',
                params:
                
            })
        })
        )
    })
});

export const { useGetCardsQuery, useGetCardQuery, useGetPostQuery } = api;