import axios from "axios";

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ?
        'http://localhost:4000/api' :
        '/api'
})

export default api