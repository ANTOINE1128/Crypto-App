import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './crypto/currencySlice';

const store = configureStore({
  reducer: {
    currencies: currencyReducer,
  },
});

export default store;
