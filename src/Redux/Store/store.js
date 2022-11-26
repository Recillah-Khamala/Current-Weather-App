import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../Slices/weatherSlice';

const Store = configureStore({
  reducer: weatherReducer,
});

export default Store;
