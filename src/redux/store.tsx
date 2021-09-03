import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./../services/auth";

import counterReducer from "./reducers/counter";
import addMemberModal from "./reducers/members";
import { postApi } from './../services/post';

export const store = configureStore({
  reducer: {
    addMemberModal: addMemberModal,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, postApi.middleware),
});

setupListeners(store.dispatch);
