import axios from 'axios';

export const serverURL = `https://api.github.com/gists/public?`;

export const fetch = axios.create({
    baseURL: `${serverURL}`,
    timeout: 7000,
    headers: {
        'Accept': 'application/json',
    }
});

