import axios from 'axios';

// Configuração centralizada do Axios para o projeto FECAF
const api = axios.create({
  baseURL: 'https://dummyjson.com', // URL oficial exigida pelo desafio
  timeout: 10000,
});

export default api;