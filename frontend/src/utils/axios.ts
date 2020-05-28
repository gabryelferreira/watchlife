import axios from 'axios';
import { getToken } from './auth';

axios.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axios.interceptors.response.use(response => {
    console.log("API.response", response);
    return response;
}, (error) => {
    return Promise.reject(error.response);
})
