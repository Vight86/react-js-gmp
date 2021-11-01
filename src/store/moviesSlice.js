import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

require('babel-polyfill');

export const loadMovies = createAsyncThunk('movies/loadMovies', async (url) => fetch(url).then((res) => res.json()));

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    totalAmount: 0,
    data: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.data.push(...action.payload.data);
    },
    increaseTotalAmount: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.totalAmount += action.payload;
    },
    decreaseTotalAmount: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.totalAmount -= action.payload;
    },
  },
  extraReducers: {
    [loadMovies.fulfilled]: (state, action) => ({ ...action.payload }),
  },
});

export const { addMovies, increaseTotalAmount, decreaseTotalAmount } = moviesSlice.actions;

export default moviesSlice.reducer;
