import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ?
        'http://localhost:4000/api' :
        '/api'
})

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        } else {
            delete config.headers.Authorization
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default api
