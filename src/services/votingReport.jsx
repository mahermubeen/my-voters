import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const votingApi = createApi({
  reducerPath: "votingApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://18.219.122.15:8000/api/" }),

  endpoints: (builder) => ({
    getAllVotings: builder.query({
      query: (token) => ({
        url: "voting-report",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getVoting: builder.query({
      query: ({ id, token }) => ({
        url: `voting-report/${id}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteVoting: builder.mutation({
      query: ({ id, token }) => ({
        url: `voting-report/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateVoting: builder.mutation({
      query: ({ id, token, ...patch }) => ({
        url: `voting-report/${id}`,
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    createVoting: builder.mutation({
      query: ({ email, password, token }) => ({
        url: "voting-report",
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
  useGetAllVotingsQuery,
  useGetVotingQuery,
  useCreateVotingMutation,
  useDeleteVotingMutation,
  useUpdateVotingMutation,
} = votingApi;
