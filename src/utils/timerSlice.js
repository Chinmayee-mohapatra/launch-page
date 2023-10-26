// timerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    hours: 0,
    minutes: 0, // Initial time for the event (10 minutes)
    seconds: 0,
    isTimerCompleted: false,
  },
  reducers: {
    decrementTime: (state) => {
      if (state.hours === 0 && state.minutes === 0 && state.seconds === 0) {
        state.isTimerCompleted = true;
      } else if (state.seconds === 0) {
        if (state.minutes === 0) {
          state.hours -= 1;
          state.minutes = 59;
        } else {
          state.minutes -= 1;
        }
        state.seconds = 59;
      } else {
        state.seconds -= 1;
      }
    },
  },
});

export const { decrementTime } = timerSlice.actions;

export default timerSlice.reducer;
