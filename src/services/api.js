import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://127.0.0.1:8081/visa/',
  // baseURL: 'https://api.github.com/repos/TanStack/',
  baseURL: 'http://localhost:3000/api/',
  timeout: 30000,
});

export default axiosInstance;
