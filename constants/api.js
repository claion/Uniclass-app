import axios from "axios";

const API_URL = '' // ngrok

export const endPoints = {
    login: '/auth/login/',

}

export const authApi = axios.create({
    baseURL: API_URL,
    headers: {'Content-Type': 'application/json'}  
})
