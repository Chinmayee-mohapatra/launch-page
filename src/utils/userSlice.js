// timerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    emails: [],
  },
  reducers: {
    userEmail: (state, action) => {
      state.emails.push(action.payload);
    },
  },
});

export const { userEmail } = userSlice.actions;

export default userSlice.reducer;
