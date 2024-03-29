import { createSlice } from '@reduxjs/toolkit';

const initialNewsState = {
  newsList: [],
  newsPageAt: null,
  q: null,
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
      state.newsPageAt = null;
    },
    setPageAt(state, action) {
      state.newsPageAt = action.payload;
    },
    setNewsList(state, action) {
      state.newsList = action.payload;
    },
    setQuery(state, action) {
      state.q = action.payload;
    },
  },
});

export const newsListActions = newsList.actions;
export default newsList.reducer;
