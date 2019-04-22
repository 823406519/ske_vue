import axios from 'axios'
// import qs from 'qs' // 引入qs 序列化模块
// import state from '../store/state'
import Vue from 'vue'
/**
 * @description axios 默认全局配置修改
 */
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 3000 // 超过3s请求被弃用

/**
 * @description 请求拦截器
 */
axios.interceptors.request.use(
  config => {
    // 请求前要做的事
    const token = localStorage.getItem('token')
    console.log('请求拦截获取到的token ----->', token)
    // const token = state.token // 为了避免获取到过期的token，我们不从locaostorage中获取token
    if (token) config.headers.Authorization = token // token存在，则假如Authorization请求头
    return config
  },
  error => {
    // 处理错误
    return Promise.reject(error)
  }
)

/**
 * @description 封装get方法
 */
function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

/**
 * @description 封装post方法
 */
function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      // .post(url, qs.stringify(params))
      .post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

/**
 * @description 封装put 方法
 */
function put(url, params) {
  return new Promise((resolve, reject) => {
    axios
      // .put(url, qs.stringify(params))
      .put(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export default {
  get,
  post,
  put
}
