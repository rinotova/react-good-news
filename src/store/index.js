import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/news-slice';
import localeReducer from './slices/locale-slice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    locale: localeReducer,
  },
});

export default store;
