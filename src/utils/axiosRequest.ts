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

/*响应拦截器*/
axiosRequest.interceptors.response.use(function (response) {
    /*对2xx范围内的状态码*/
    return response.data;
}, function (error) {
    /*超出2xx范围的状态码*/
    console.log("response filter failed")
    return Promise.reject(error);
})


/*Post请求方法
* T: 请求的范型*/
export async function httpCall<T>(url: string, data: T) {
    /*data数据类型要和后端的一致*/
    try {
        const response = await axiosRequest.post('/customer/create', data);
        /*上面已经进行了响应拦截，返回的已经是解析后的data数据了*/
        console.log('httpCall:', response)
    } catch (error) {
        console.log(error);
    }
}