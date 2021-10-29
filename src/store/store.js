import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import requestReducer from './requestSlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
    request: requestReducer,
  },
});
