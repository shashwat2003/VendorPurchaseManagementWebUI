import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import loaderReducer from './loader/loaderSlice';

export default configureStore({
  reducer: {
    loader: loaderReducer,
    auth: authReducer,
  },
});
