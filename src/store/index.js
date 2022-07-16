import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/news-slice';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
