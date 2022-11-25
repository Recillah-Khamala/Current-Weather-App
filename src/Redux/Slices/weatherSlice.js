import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//   Action
export const fetchWeather = createAsyncThunk(
  'weatherSlice/weather',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=0447120cb54e5dfb3cdfbd5191ffa2dd`,
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  },
);

// slice
const weatherSlice = createSlice({
  name: 'weather',
  imitialState: { data: 'Loaded' },
  extraReducers: (builder) => {
    // pending
    builder.addCase(fetchWeather.pending, (state) => {
      const st = state;
      st.loading = true;
    });
    // fulfilled
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      const st = state;
      st.weather = action?.payload;
      st.loading = false;
      st.error = undefined;
    });
    // rejected
    builder.addCase(fetchWeather.rejected, (state, action) => {
      const st = state;
      st.loading = false;
      st.weather = undefined;
      st.error = action?.payload;
    });
  },
});

export default weatherSlice.reducer;
