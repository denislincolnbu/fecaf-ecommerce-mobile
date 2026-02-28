import { configureStore } from '@reduxjs/toolkit';
// Verifique se o caminho do seu slice/reducer está correto e em maiúsculo
import authReducer from '../store/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;