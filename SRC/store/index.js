import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Importando o seu arquivo userSlice.js

const store = configureStore({
  reducer: {
    user: userReducer, // Aqui o estado global será acessado como 'state.user'
  },
});

export default store;