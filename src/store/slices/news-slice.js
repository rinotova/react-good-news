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
      state.newsPageAt = state.newsPageAt + 1;
    },
    resetPageAt(state) {
      state.newsPageAt = 1;
    },
    setTotalResults(state, action) {
      state.totalResults = action.payload;
    },
  },
});

export const newsListActions = newsList.actions;
export default newsList.reducer;
