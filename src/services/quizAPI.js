import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/",
  }),
  tagTypes: ["Quiz"],
  endpoints: (builder) => ({
    quizs: builder.query({
      query: () => "/WhatCapitalQuiz",
      providesTags: ["Quiz"],
    }),

    findIdQuiz: builder.query({
      query: (quizId) => `/WhatCapitalQuiz/${quizId}`,
    }),

    addQuiz: builder.mutation({
      query: (quiz) => ({
        url: "/WhatCapitalQuiz",
        method: "POST",
        body: quiz,
      }),
      invalidatesTags: ["Quiz"],
    }),
    updateQuiz: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/WhatCapitalQuiz/${id}`,
        method: "PUT",
        body: rest,
      }),

      invalidatesTags: ["Quiz"],
    }),
    deleteQuiz: builder.mutation({
      query: (id) => ({
        url: `/WhatCapitalQuiz/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Quiz"],
    }),
  }),
});

export const {
  useQuizsQuery,
  useFindIdQuizQuery,
  useAddQuizMutation,
  useUpdateQuizMutation,
  useDeleteQuizMutation,
} = quizApi;
