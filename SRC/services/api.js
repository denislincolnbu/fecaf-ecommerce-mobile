import axios from 'axios';

// Configuração central do Axios para a API DummyJSON
const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export default api;