import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appointmentsAPI = createApi({
  reducerPath: "appointmentsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://voice-lookrunner.dsmeglobal.com/",
  }),
  endpoints: (builder) => ({
    appointments: builder.query({
      query: (data) =>
        `api/registrar_register/get-appointment-by-registrar-id?id=${data.id}&page=${data.page}&limit=${data.limit}`,
    }),
  }),
});

export const { useAppointmentsQuery } = appointmentsAPI;
