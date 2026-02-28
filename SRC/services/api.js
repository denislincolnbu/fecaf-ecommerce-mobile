import axios from 'axios';

// Configuração base do Axios para o projeto FECAF
const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export default api;