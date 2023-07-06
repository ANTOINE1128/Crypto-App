import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.coinlore.net/api/tickers/';

const initialState = {
  currencies: [],
  isLoading: false,
  error: null,
};

export const getCurrencies = createAsyncThunk(
  'currencies/getCurrencies',
  async () => {
    try {
      const response = await axios.get(url);
      const { data } = response.data;
      return data;
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  },
);

const currencySlice = createSlice({
  name: 'Currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrencies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currencies = action.payload;
        state.error = null;
      })
      .addCase(getCurrencies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default currencySlice.reducer;
