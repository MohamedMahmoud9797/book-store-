// store.js
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./book.slice";
import authSlice from "./auth.slice";
const store = configureStore({
  reducer: {
    book: bookReducer,
    auth: authSlice,
  },
});

export default store;
