import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//   Action
export const SET_LOADING = 'loading';
export const WEATHER_DATA_LOADED = 'successful';
export const SET_ERRORS = 'error';
export const SET_BOTTOM_NAV_NUMBER = 'SET_BOTTOM_NAV_NUMBER';

export const getWeather = (location) => (dispatch) => {
  if (!location)
    return dispatch({
      status: SET_ERRORS,
      payload: 'please enter location',
    });
  dispatch({ status: SET_LOADING, payload: true });
  dispatch({ status: WEATHER_DATA_LOADED, payload: {} });
  Axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0447120cb54e5dfb3cdfbd5191ffa2dd`
  )
    .then((res) => {
      dispatch({
        status: WEATHER_DATA_LOADED,
        payload: res.data,
      });
      dispatch({ state: SET_LOADING, payload: false });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        status: SET_ERRORS,
        payload: error.response
          ? 'Weather data not found!'
          : 'Please check your network connection!',
      });
      dispatch({ type: Types.SET_LOADING, payload: false });
    });
};

// export const fetchWeather = createAsyncThunk(
//   'weatherSlice/weather',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const data = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=0447120cb54e5dfb3cdfbd5191ffa2dd`
//       );
//       return data.data;
//     } catch (error) {
//       if (!error?.response) {
//         throw error;
//       }
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );

// slice

const initialState = {
  loading: false,
  weather: {},
  error: '',
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case WEATHER_DATA_LOADED: {
      return {
        ...state,
        error: '',
        weather: action.payload,
      };
    }
    case SET_ERRORS: {
      return {
        ...state,
        weather: {},
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;

// const weatherSlice = createSlice({
//   name: 'weather',
//   initialState: { data: 'Loaded' },
//   extraReducers: (builder) => {
//     // pending
//     builder.addCase(fetchWeather.pending, (state) => {
//       const st = state;
//       st.loading = true;
//     });
//     // fulfilled
//     builder.addCase(fetchWeather.fulfilled, (state, action) => {
//       const st = state;
//       st.weather = action?.payload;
//       st.loading = false;
//       st.error = undefined;
//     });
//     // rejected
//     builder.addCase(fetchWeather.rejected, (state, action) => {
//       const st = state;
//       st.loading = false;
//       st.weather = undefined;
//       st.error = action?.payload;
//     });
//   },
// });

// export default weatherSlice.reducer;
