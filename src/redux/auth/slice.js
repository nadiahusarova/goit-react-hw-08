import { createSlice } from "@reduxjs/toolkit";
import { getMeThunk, loginThunk, logoutThunk, registerThunk } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(getMeThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getMeThunk.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
