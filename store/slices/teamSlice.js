import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  members: [],
  status: "idle",
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeam: (state, action) => {
      state.members = action.payload;
      state.status = "succeeded";
    },
    resetTeam: () => initialState,
  },
});

export const { setTeam, resetTeam } = teamSlice.actions;
export default teamSlice.reducer;
