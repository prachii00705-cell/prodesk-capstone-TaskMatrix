import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  status: "all",
  priority: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    setPriorityFilter: (state, action) => {
      state.priority = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setQuery, setStatusFilter, setPriorityFilter, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
