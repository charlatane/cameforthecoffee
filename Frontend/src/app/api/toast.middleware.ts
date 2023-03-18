import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { createStandaloneToast } from "@chakra-ui/toast";

const { toast } = createStandaloneToast();

export const rtkqToast: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const toastDescription = action.payload.data
        ? action.meta.baseQueryMeta.response.statusText
        : "Internal Server Error";

      if (!toast.isActive("exists")) {
        toast({
          id: "exists",
          title: "Error",
          description: toastDescription,
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true
        });
      }
    }

    return next(action);
  };
