import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState.js";
import {
  createGoogleCalendarEvent,
  fetchGoogleCalendarEvents,
} from "./operations.js";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState.calendar,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchGoogleCalendarEvents.pending, handlePending)
      .addCase(fetchGoogleCalendarEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchGoogleCalendarEvents.rejected, handleRejected)
      .addCase(createGoogleCalendarEvent.pending, handlePending)
      .addCase(createGoogleCalendarEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.events.push(action.payload); // Add created event to the events list
      })
      .addCase(createGoogleCalendarEvent.rejected, handleRejected),
});

export default calendarSlice.reducer;
