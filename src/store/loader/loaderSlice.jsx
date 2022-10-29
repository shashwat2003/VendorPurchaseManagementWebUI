import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loading: false,
  },
  reducers: {
    start: (state) => {
      state.loading = true;
    },
    stop: (state) => {
      state.loading = false;
    },
  },
});

export const { start, stop } = loaderSlice.actions;

export default loaderSlice.reducer;
