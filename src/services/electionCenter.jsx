import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const electionApi = createApi({
  reducerPath: "electionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://18.219.122.15:8000/api/" }),

  endpoints: (builder) => ({
    getAllElections: builder.query({
      query: (token) => ({
        url: "election-center",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getElection: builder.query({
      query: ({ id, token }) => ({
        url: `election-center/${id}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteElection: builder.mutation({
      query: ({ id, token }) => ({
        url: `election-center/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateElection: builder.mutation({
      query: ({ id, token, ...patch }) => ({
        url: `election-center/${id}`,
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    createElection: builder.mutation({
      query: ({ email, password, token }) => ({
        url: "election-center",
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
  useGetAllElectionsQuery,
  useGetElectionQuery,
  useCreateElectionMutation,
  useDeleteElectionMutation,
  useUpdateElectionMutation,
} = electionApi;
