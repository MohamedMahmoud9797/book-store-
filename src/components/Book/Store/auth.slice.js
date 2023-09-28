// bookSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLogInOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { isLogInOut } = authSlice.actions;
export default authSlice.reducer;
