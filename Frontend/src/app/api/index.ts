import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "app/config";

const baseQuery = fetchBaseQuery({
  baseUrl: env.apiEndpoint,
  credentials: "include",
  prepareHeaders: (headers, { getState }: any) => {
    const accessToken = window.localStorage.getItem("jwt");
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  }
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({})
});
