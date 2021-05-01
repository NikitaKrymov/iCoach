import axios from 'axios';

export default axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET, POST'
    },
    withCredentials: true
})