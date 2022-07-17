import { createSlice } from '@reduxjs/toolkit';
import { getCountryFromLocalStorage } from '../../helpers/countryHelpers';

const initialLocaleState = {
  countryCode: getCountryFromLocalStorage() || 'select',
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
