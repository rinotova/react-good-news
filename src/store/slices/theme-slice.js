import { createSlice } from '@reduxjs/toolkit';
import { isDarkThemeEnabled } from '../../helpers/themeHelpers';

const initialThemeState = {
  isDarkTheme:
    isDarkThemeEnabled() ||
    (localStorage.getItem('newsDarkTheme') === null &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches),
};

const theme = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    toggleDarkTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const themeActions = theme.actions;
export default theme.reducer;
