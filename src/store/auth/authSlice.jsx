import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
  },
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
