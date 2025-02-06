import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../services/api.js";
import axios from "axios";


// Fetch Google Calendar Events
export const fetchGoogleCalendarEvents = createAsyncThunk(
  "calendar/fetchEvents",
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create Google Calendar Event
export const createGoogleCalendarEvent = createAsyncThunk(
  "calendar/createEvent",
  async ({ token, eventData }, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        eventData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Event Created:", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
