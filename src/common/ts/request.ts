import axios from '../../../node_modules/axios/dist/axios.min.js'
import qs from '../../../node_modules/qs/dist/qs.js'

// axios.defaults.timeout = 30 * 1000
// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = '/api'      默认在每个接口前面加/api

// 请求拦截器
axios.interceptors.request.use((config) => {
  // 请求之前做什么
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (err) => {
  // 请求错误做什么
  console.log(err)
})

// 响应拦截器
axios.interceptors.response.use((rs) => {
  return rs
}, (err) => {
  console.log(err)
})

function request(options: option) {
  if (!options) {
    return
  }
  let config: option = {
    url: options.url,
    method: options.method
  }

  if (options.method === 'get') {
    config.params = options.data || {}
  } else {
    config.data = options.data || {}
  }

  // config.headers = { }

  return new Promise((resolve, reject) => {
    axios(config).then(rs => {
      resolve(rs.data)
    }, (err) => {
      reject(err)
    }).catch((err) => {
      reject(err)
    })
  })
}

interface option {
  url: string,
  method: string,
  params?: object,
  data?: object,
  headers?: object
}

export function post(url: string, data?: object) {
  return request({
    url,
    method: 'POST',
    data
  })
}

export function get(url: string, data?: object) {
  return request({
    url,
    data,
    method: 'GET'
  })
}