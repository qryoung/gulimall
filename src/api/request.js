// axios 二次封装
import axios from "axios";
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
// start: 进度条开始 done 结束


// request  就是 axios

const requests = axios.create({
    // 路径后自动添加 api
    baseURL: '/api',
    timeout: 5000
});

// 请求拦截器
requests.interceptors.request.use((config) => {
    // 配置对象 config
    nprogress.start();
    return config;
});

// 响应拦截器   (加入 进度条)

requests.interceptors.response.use((res) => { 
    nprogress.done();
    return res.data;
}, (error) => { 
    return Promise.reject(new Error('faile'))
})

export default requests