// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://https://deiamandalas-production.up.railway.app/-backend-railway.app' // Substitua pela URL real do seu back-end
});

export default api;
