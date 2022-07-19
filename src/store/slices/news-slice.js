import { createSlice } from '@reduxjs/toolkit';

const initialNewsState = {
  newsList: [],
  newsPageAt: 1,
  totalResults: 0,
};

const newsList = createSlice({
  name: 'news',
  initialState: initialNewsState,
  reducers: {
    resetNewsList(state) {
      state.newsList = [];
    },
    updateNewsList(state, action) {
      state.newsList = state.newsList.concat(action.payload);
    },
    resetPageAt(state) {
      state.newsPageAt = 1;
    },
    setPageAt(state, action) {
      state.newsPageAt = action.payload;
    },
    setTotalResults(state, action) {
      state.totalResults = action.payload;
    },
  },
});

export const newsListActions = newsList.actions;
export default newsList.reducer;
