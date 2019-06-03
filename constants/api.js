import axios from "axios";

const API_URL = 'http://a4c18fec.ngrok.io' // ngrok

export const endPoints = {
    login: '/auth/login/',
    validateToken: id => `/users/${id}/api/validate-token/`
}

export const authApi = axios.create({
    baseURL: API_URL,
    headers: {'Content-Type': 'application/json'}  
})

export default (token) => axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    }
})
