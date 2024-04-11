import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://723f595a3df84314bb72ce041eae2986.api.mockbin.io/' }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: () => '',
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useFetchDataQuery } = apiSlice;