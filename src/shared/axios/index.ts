import axios, { type AxiosInstance } from "axios";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const api: AxiosInstance = axios.create({
    baseURL: apiUrl,
});