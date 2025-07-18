import axios, {type AxiosRequestConfig} from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1'
});

class ApiClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll=(config?: AxiosRequestConfig)=> {
        return axiosInstance.get<T[]>(this.endpoint, config)
            .then(res=>res.data);
    }


}

export default ApiClient;