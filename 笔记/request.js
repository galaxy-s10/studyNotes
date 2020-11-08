// 创建一个axios实例
const service = axios.create({
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    console.log(error)
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(response => {
  const res = response.data
  // 对响应数据做点什么
  return res
}, error => {
  console.log('err' + error)
  // 对响应错误做点什么
  return Promise.reject(error)
}
)

// 导出封装好的axios实例
export default service
