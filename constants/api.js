import axios from "axios";

const API_URL = 'http://22f8801d.ngrok.io' // ngrok

export const endPoints = {
    login: '/auth/login/',

}

export const authApi = axios.create({
    baseURL: API_URL,
    headers: {'Content-Type': 'application/json'}  
})
