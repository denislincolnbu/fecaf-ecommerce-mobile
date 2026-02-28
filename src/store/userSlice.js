import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // minúsculo

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;