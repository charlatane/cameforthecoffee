import { api } from "app/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "app/state";

export interface AuthState {
  accessToken: string | null;
  user: {
    role: string;
    id: string;
  } | null;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: window.localStorage.getItem("accessToken")
  } as AuthState,
  reducers: {
    login: (
      state: AuthState,
      action: {
        payload: {
          accessToken: string;
          user: {
            role: string;
            id: string;
          };
        };
      }
    ) => {
      const { accessToken, user } = action.payload;

      window.localStorage.setItem("jwt", accessToken);
      window.localStorage.setItem("role", user.role);
      window.localStorage.setItem("id", user.id);

      state.accessToken = accessToken;
      state.user = user;
    },

    logout: (state: AuthState) => {
      state.accessToken = null;
      state.user = null;

      window.localStorage.clear();

      store.dispatch(api.util.resetApiState());
    }
  }
});

export const authReducer = authSlice.reducer;

export const { login, logout } = authSlice.actions;
