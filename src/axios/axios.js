import axios from 'axios'

// export const baseURL = process.env.NODE_ENV === 'development' ? 'http://192.168.200.58/' : ''
export const baseURL = process.env.NODE_ENV === 'development' ? 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api' : ''

axios.defaults.baseURL = baseURL // 配置默认域名，请求接口时自动添加域名

axios.defaults.timeout = 2000 // 响应时间
axios.defaults.headers = {
  'Content-Type': 'application/json;charset=UTF-8'
}

axios.defaults.withCredentials = false // 是否是跨域请求

axios.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

// 请求响应数据返回后的拦截器
axios.interceptors.response.use(
  rsp => {
    if (rsp.data.type === 'tologin') {

    } else if (rsp.data.type === 'success' || rsp.data.status === '200') {
      if (rsp.headers['token']) {
        sessionStorage.setItem('token', rsp.headers['token'])
      }
      return rsp
    } else {
      if (rsp.data.type === 'error' && rsp.data.msg === 'token 为空') {

      }
      return rsp
    }
  }, err => {
    console.log('axios响应拦截器---请求失败')
    if (err.response) {
      console.log('报错')
    } else { }
  }
)

export default axios
