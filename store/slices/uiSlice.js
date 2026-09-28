import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: true,
  loading: false,
  error: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUiError: (state, action) => {
      state.error = action.payload;
    },
    clearUiError: (state) => {
      state.error = null;
    },
  },
});

export const { setSidebarOpen, setLoading, setUiError, clearUiError } =
  uiSlice.actions;
export default uiSlice.reducer;
