import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.status = "succeeded";
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.status = "idle";
      state.error = null;
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    },
    hydrateAuth: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = Boolean(action.payload.user);
      state.status = action.payload.user ? "succeeded" : "idle";
      state.error = null;
    },
  },
});

export const { loginSuccess, logout, setAuthError, hydrateAuth } =
  authSlice.actions;
export default authSlice.reducer;
