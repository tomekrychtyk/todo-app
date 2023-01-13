import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = import.meta.env.VITE_API_URL;

export const todosApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: 'todo',
      }),
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
