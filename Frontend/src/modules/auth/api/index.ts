import { api } from "app/api";
import * as ApiTypes from "./type";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ApiTypes.LoginResponse, ApiTypes.LoginRequest>({
      query: ({ data }) => ({
        url: `api/v1/token/login/`,
        method: `POST`,
        body: { data }
      })
    }),

    register: builder.mutation<
          ApiTypes.RegisterResponse,
          ApiTypes.RegisterRequest
        >({
          query: ({ first_name,last_name,username,email,password }) => ({
            url: `user/signup`,
            method: `POST`,
            body: { first_name,last_name,username,email,password }
          })
        }),
        
    getCurrentUser: builder.query<
      ApiTypes.GetCurrentUserResponse,
      ApiTypes.GetCurrentUserRequest
    >({
      query: () => ({
        url: `/user`,
        method: `GET`
      })
    })
  }),  overrideExisting: false
});


export const { useLoginMutation,useRegisterMutation, useGetCurrentUserQuery } = authApi;
