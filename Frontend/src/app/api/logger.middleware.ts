import { isFulfilled, isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";

export const rtkqLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.error(
        "Request Method: ",
        action.meta.baseQueryMeta.request.method,
        "\nRequest URL: ",
        action.meta.baseQueryMeta.request.url,
        "\nRequest Headers:\n",
        action.meta.baseQueryMeta.request.headers,
        "\nRequest Body:\n",
        action.meta.arg.originalArgs,
        "\n\nResponse Status: ",
        action.meta.baseQueryMeta.response.status,
        "\nResponse Text: ",
        action.meta.baseQueryMeta.response.statusText,
        "\nResponse Data:\n",
        action.payload
      );
    } else if (isFulfilled(action)) {
      console.info(
        "Request Method: ",
        action.meta.baseQueryMeta.request.method,
        "\nRequest URL: ",
        action.meta.baseQueryMeta.request.url,
        "\nRequest Headers:\n",
        action.meta.baseQueryMeta.request.headers,
        "\nRequest Body:\n",
        action.meta.arg.originalArgs,
        "\n\nResponse Status: ",
        action.meta.baseQueryMeta.response.status,
        "\nResponse Text: ",
        action.meta.baseQueryMeta.response.statusText,
        "\nResponse Data:\n",
        action.payload
      );
    }

    return next(action);
  };
