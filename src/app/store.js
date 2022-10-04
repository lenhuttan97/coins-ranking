import { configureStore } from '@reduxjs/toolkit';
import counterSlice  from '../features/slice';
import CoinSlide from '../features/CoinSlide';

export const store = configureStore({
    reducer: {
      // counter: counterReducer,
      coins: counterSlice,
      coinDetail: CoinSlide
    },
  });
  