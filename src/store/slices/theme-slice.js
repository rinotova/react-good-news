import { createSlice } from '@reduxjs/toolkit';
import { isDarkThemeEnabled } from '../../helpers/theme-helpers';

const initialThemeState = {
  isDarkTheme: isDarkThemeEnabled(),
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
