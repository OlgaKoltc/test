import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = 'https://jsonplaceholder.typicode.com/';

export const projectsApi = createApi({
    reducerPath: 'projectsApi',
    tagTypes: ['Projects'],
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (build) => ({
        getProjects: build.query({
            query: (limit = '1') => `posts?${limit && `_limit= ${limit}`}`,
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Projects', id })),
                    { type: 'Projects', id: 'LIST' },]
                    : [{ type: 'Projects', id: 'LIST' }],
        }),
        addLike: build.mutation({
            query({ id, body }) {
                return {
                    url: `posts/${id}`,
                    method: 'POST',
                    body,
                }
            },
            invalidateTags: [{ type: 'Projects', id: 'LIST' }],
        }),
    }),
});

export const { useGetProjectsQuery, useAddLikeMutation } = projectsApi;