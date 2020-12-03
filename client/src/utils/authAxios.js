import axios from 'axios';

export const authAxios = (token) => {
    const axiosReq = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });

    axiosReq.interceptors.request.use(
        (config) => {
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    axiosReq.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            const code = error && error.response ? error.response.status : 0;
            if (code === 401 || code === 403) {
                console.log('error code', code);
            }
            return Promise.reject(error);
        },
    );

    return axiosReq;
}


