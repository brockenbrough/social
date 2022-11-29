import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8087/statistics/user-likes'
})

export const postURL = axios.create({
    baseURL: 'http://localhost:8083/posts'
})