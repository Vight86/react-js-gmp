import { createSlice } from '@reduxjs/toolkit';

export const requestSlice = createSlice({
  name: 'requestSlice',
  initialState: {
    url: 'http://localhost:4000/movies',
    options: {
      limit: 6,
      sortOrder: 'desc',
      filter: '',
      offset: 0,
      sortBy: 'release_date',
    },
  },
  reducers: {
    updateFilterOptions: (state, { payload: { options } }) => ({
      ...state,
      options: {
        ...state.options,
        offset: 0,
        filter: options.genre,
        search: '',
      },
    }),
    updateSortOptions: (state, { payload: { options } }) => ({
      ...state,
      options: {
        ...state.options,
        sortBy: options.sortBy,
        sortOrder: options.sortOrder,
      },
    }),
  },
});

export const { updateFilterOptions, updateSortOptions } = requestSlice.actions;

export default requestSlice.reducer;
