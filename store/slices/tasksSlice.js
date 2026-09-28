import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    resetTasks: () => initialState,
  },
});

export const { setTasks, resetTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
