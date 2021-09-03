import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const surveyApi = createApi({
  reducerPath: "surveyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://18.219.122.15:8000/api/" }),

  endpoints: (builder) => ({
    getAllSurveys: builder.query({
      query: (token) => ({
        url: "survey",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getSurvey: builder.query({
      query: ({ id, token }) => ({
        url: `survey/${id}`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteSurvey: builder.mutation({
      query: ({ id, token }) => ({
        url: `survey/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateSurvey: builder.mutation({
      query: ({ id, token, ...patch }) => ({
        url: `survey/${id}`,
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    createSurvey: builder.mutation({
      query: ({ email, password, token }) => ({
        url: "survey",
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
  useGetAllSurveysQuery,
  useGetSurveyQuery,
  useCreateSurveyMutation,
  useDeleteSurveyMutation,
  useUpdateSurveyMutation,
} = surveyApi;
