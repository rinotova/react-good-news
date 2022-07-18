import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/news-slice';
import localeReducer from './slices/locale-slice';
import themeReducer from './slices/theme-slice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    locale: localeReducer,
    theme: themeReducer,
  },
});

export default store;
