import { createSlice } from '@reduxjs/toolkit';
import { verify } from '../../network/requests';

const isLogged = (await verify()).verified;
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: isLogged,
  },
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
