import axios from "axios";

const token = localStorage.getItem('accessToken')

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ?
        'http://localhost:4000/api' :
        '/api',
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
})

export default api