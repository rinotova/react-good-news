import { createSlice } from '@reduxjs/toolkit';

const initialUseFetchSliceState = {
  controller: new AbortController(),
};

const useFetch = createSlice({
  name: 'useFetch',
  initialState: initialUseFetchSliceState,
  reducers: {
    setController(state, action) {
      state.controller = action.payload;
    },
  },
});

export const useFetchActions = useFetch.actions;
export default useFetch.reducer;
