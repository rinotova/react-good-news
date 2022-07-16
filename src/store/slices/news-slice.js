import { createSlice } from '@reduxjs/toolkit';

const initialNewsState = {
  newsList: [
    {
      id: 'n1',
      headline:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      url: '/',
    },
    {
      id: 'n2',
      headline:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      url: '/',
    },
  ],
};

const newsList = createSlice({
  name: 'news',
  initialState: initialNewsState,
  reducers: {
    updateNewsList(state, action) {
      state.newsList = state.newsList.concat(action.payload);
    },
  },
});

export const newsListActions = newsList.actions;
export default newsList.reducer;
