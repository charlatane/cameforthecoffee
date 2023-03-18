import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";

export const invalidateAuth: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (
      isRejectedWithValue(action) &&
      action.meta.baseQueryMeta.response.status === 401
    ) {
      // window.localStorage.clear();
      // window.location.reload();
    }

    return next(action);
  };
