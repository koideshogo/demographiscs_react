import axios from "axios";

/**
 * api/v1 用の API インスタンスを生成する
 */
export const axiosV1Instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'v1',
    headers: {
        "X-API-KEY": import.meta.env.VITE_API_KEY,
    }
});