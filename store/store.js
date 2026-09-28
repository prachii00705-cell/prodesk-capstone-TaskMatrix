import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import projectsReducer from "./slices/projectsSlice";
import tasksReducer from "./slices/tasksSlice";
import teamReducer from "./slices/teamSlice";
import filtersReducer from "./slices/filtersSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
    team: teamReducer,
    filters: filtersReducer,
    ui: uiReducer,
  },
});

export default store;
