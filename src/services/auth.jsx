import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://18.219.122.15:8000/api/" }),

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "auth/users",
        method: "GET",
      }),
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `auth/users/${id}`,
        method: "GET",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `auth/users/${id}`,
        method: "DELETE",
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `auth/users/${id}`,
        method: "PATCH",
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: {
          email: email,
          password: password,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    createUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: {
          email: email,
          password: password,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useLoginUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useCreateUserMutation,
} = authApi;
