
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Adjust the base URL according to your API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
