import axois from 'axios'

const service = axois.create({
    //url = baseURL + requestURL
    baseURL: "http://127.0.0.1:8080",
    // 配置超时时间 5s
    timeout: 5000
});

export default service;