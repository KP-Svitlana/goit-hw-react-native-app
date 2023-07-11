import { createSlice } from "@reduxjs/toolkit";

const state = {
  login: null,
  email: null,
  stateChange: false,
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      login: payload.login,
      email: payload.email,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSingOut: () => state,
  },
});
