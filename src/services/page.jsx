import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pageApi = createApi({
  reducerPath: "pageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://18.219.122.15:8000/api/" }),

  endpoints: (builder) => ({
    getAllPages: builder.query({
      query: (token) => ({
        url: "page",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getPage: builder.query({
      query: ({ id, token }) => ({
        url: `page/${id}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deletePage: builder.mutation({
      query: ({ id, token }) => ({
        url: `page/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updatePage: builder.mutation({
      query: ({ id, token, ...patch }) => ({
        url: `page/${id}`,
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    createPage: builder.mutation({
      query: ({ email, password, token }) => ({
        url: "page",
        method: "POST",
        body: {
          email: email,
          password: password,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPagesQuery,
  useGetPageQuery,
  useCreatePageMutation,
  useDeletePageMutation,
  useUpdatePageMutation,
} = pageApi;
