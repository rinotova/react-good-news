import { createSlice } from '@reduxjs/toolkit';

const initialLocaleState = {
  countryCode: 'US',
};

const userLocale = createSlice({
  name: 'locale',
  initialState: initialLocaleState,
  reducers: {
    updateCountryCode(state, action) {
      state.countryCode = action.payload;
    },
  },
});

export const localeActions = userLocale.actions;
export default userLocale.reducer;
