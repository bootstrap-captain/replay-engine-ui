import axios from "axios";

export let axiosRequest = axios.create();
axiosRequest.defaults.baseURL = 'http://localhost:8080';
axiosRequest.defaults.timeout = 500;

/*请求拦截器*/
axiosRequest.interceptors.request.use(function (config) {
        /*请求拦截器,可以注入token*/
        return config;
    },

    function (error) {
        console.log("request filter failed")
        return Promise.reject(error);
    }
)

axiosRequest.interceptors.response.use(function (response) {
    /*对2xx范围内的状态码*/
    return response.data;
}, function (error) {
    /*超出2xx范围的状态码*/
    console.log("response filter failed")
    return Promise.reject(error);
})