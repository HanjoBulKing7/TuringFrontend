import axios from 'axios'
// Import backend url 
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// Create API instance with axios
export const api = axtios.create({
    baseURL: BACKEND_URL,
    headers: { 'Content-Type' : 'application/json'},
});
// Inject the token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwt_token");
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config;
    },
    (error) => Promise.reject(error)
);