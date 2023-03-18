import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "app/api";
import { invalidateAuth } from "app/api/invalidate-auth.middleware";
import { rtkqLogger } from "app/api/logger.middleware";
import { rtkqToast } from "app/api/toast.middleware";
// import { counterSlice } from "modules/counter/state/counter.slice";
// import { patientSlice } from "modules/patient/state/patient.slice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // patient: patientSlice.reducer,
    // counter: counterSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      rtkqToast,
      rtkqLogger,
      invalidateAuth
    )
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
