import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from "axios";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const api: AxiosInstance = axios.create({
    baseURL: apiUrl,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    return config;
});
