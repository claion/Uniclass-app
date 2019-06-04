import axios from 'axios';

const API_URL = 'http://localhost:4000'; // ngrok

export const endPoints = {
  signup: '/auth/signup/',
  login: '/auth/login/',
  validateToken: id => `/users/${id}/api/validate-token/`
};

export const authApi = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
});

export default token =>
  axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
