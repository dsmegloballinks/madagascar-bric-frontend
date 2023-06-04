import { configureStore } from "@reduxjs/toolkit";
import { appointmentsAPI } from "../apis/rtkApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [appointmentsAPI.reducerPath]: appointmentsAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appointmentsAPI.middleware),
});
