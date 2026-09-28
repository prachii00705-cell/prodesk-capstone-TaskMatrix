import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selectedProjectId: null,
  status: "idle",
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    selectProject: (state, action) => {
      state.selectedProjectId = action.payload;
    },
    resetProjects: () => initialState,
  },
});

export const { setProjects, selectProject, resetProjects } =
  projectsSlice.actions;
export default projectsSlice.reducer;
