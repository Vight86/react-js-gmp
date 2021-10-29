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
  },
  extraReducers: {
    [loadMovies.fulfilled]: (state, action) => ({ ...action.payload }),
  },
});

export const { addMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
