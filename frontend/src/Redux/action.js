import Axios from 'axios'
import config from '../config.js';

export const axios = Axios.create({
    baseURL: config.VITE_API_URL || '',
    headers: {
        'Content-Type': 'application/json'
    },
})

