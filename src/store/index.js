import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/news-slice';
import localeReducer from './slices/locale-slice';
import themeReducer from './slices/theme-slice';
import useFetchReducer from './slices/use-fetch-slice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    locale: localeReducer,
    theme: themeReducer,
    useFetch: useFetchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
