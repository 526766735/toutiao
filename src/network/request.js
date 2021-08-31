import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'https://www.escook.cn'
  })

  // 2.axios拦截器
  instance.interceptors.request.use(
    config => {
      // console.log(config)
      // 1.比如config中有一些信息不符合服务器的要求

      // 2.比如每次发送网络请求时，都希望在页面上显示一个请求图标

      // 3某些网络请求（比如登录（token）），必须携带一些特殊的信息
      return config
    },
    err => {
      console.log('请求失败')
    }
  )

  // 2.2响应拦截
  instance.interceptors.response.use(
    res => {
      // console.log(res)
      return res.data
    },
    err => {
      console.log(err)
    }
  )
  // 3.发送真正的网络请求
  return instance(config)
}
