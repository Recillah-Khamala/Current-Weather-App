import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = createAsyncThunk(
  'weatherSlice/weather',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=0447120cb54e5dfb3cdfbd5191ffa2dd`,
      );
      return data.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { showDisplay: false },
  reducers: {
    hideDisplay: (state) => {
      const st = state;
      st.showDisplay = false;
    },
  },
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
      st.showDisplay = true;
      st.error = '';
    });
    // rejected
    builder.addCase(fetchWeather.rejected, (state, action) => {
      const st = state;
      st.error = action?.payload.message;
      st.loading = false;
    });
  },
});

export const { hideDisplay } = weatherSlice.actions;
export default weatherSlice.reducer;
