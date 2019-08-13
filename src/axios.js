import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://api.duyiedu.com/api'
})

instance.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'laiyanyu_1565137465181'
  }
  // 在发送请求之前做些什么
  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})

export default instance
