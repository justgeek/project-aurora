import axios, { AxiosRequestConfig } from 'axios';
import { getBackendURL } from '../../config/backend.config';
export class HttpService {

    private defaultConfig = {
        baseURL: getBackendURL(),
    };

    public get(url: string, config?: AxiosRequestConfig) {
        return axios.get(url, config ? config : this.defaultConfig);
    }

    public post(url: string, data: any, config?: AxiosRequestConfig) {
        return axios.post(url, data ? data : {}, config ? config : this.defaultConfig);
    }

    public put(url: string, data: any, config?: AxiosRequestConfig) {
        return axios.put(url, data ? data : {}, config ? config : this.defaultConfig);
    }

    public patch(url: string, data: any, config?: AxiosRequestConfig) {
        return axios.patch(url, data ? data : {}, config ? config : this.defaultConfig);
    }

}
