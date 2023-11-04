import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://nqcfsdj9u6.us-east-1.awsapprunner.com/',
  // baseURL: 'https://api.github.com/repos/TanStack/',
  // baseURL: 'http://localhost:8090/',
  timeout: 30000,
});

export default axiosInstance;
