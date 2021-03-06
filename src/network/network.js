import axios from 'axios'

// ES6 Promise的封装
export function request(config) {
    // 1.创建axios的实例对象
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })

    // (请求拦截器)
    instance.interceptors.request.use(config => {
      return config
    }, err => {

    })
     // (响应拦截器)
    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      console.log(err);
    })

    // 通过实例发送网络请求
    return instance(config)
}