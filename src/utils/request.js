import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
  // 添加 icode
  config.headers.icode = 'A41CA9493997DA23'
  // 必须返回 config
  return config
})

//响应拦截器
service.interceptors.response.use((response) => {
  const {
    data: {
      success,
      data: { message, categorys }
    }
  } = response
  if (success) {
    return categorys
  }
  return response
})

export default service
