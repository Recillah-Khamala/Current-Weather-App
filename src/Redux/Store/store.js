import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../Slices/weatherSlice';

const Store = configureStore({
  reducer: weatherReducer,
});
 console.log('store', Store)

export default Store;
