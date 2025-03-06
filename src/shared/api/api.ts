import axios from 'axios';

export const $api = axios.create({
    baseURL: process.env.API_URL_GET_ALL,
    headers: {
        'Content-Type': 'application/json',
    },
});
