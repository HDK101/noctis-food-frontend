import axios from 'axios';

const baseURL = 'http://localhost:3000';
const server = axios.create({
  baseURL,
});

export default server;
