import { configureStore } from "@reduxjs/toolkit";
import { quizApi } from "../services/quizAPI";

export const store = configureStore({
  reducer: {
    [quizApi.reducerPath]: quizApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizApi.middleware),
});
