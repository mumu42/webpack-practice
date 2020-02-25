import axios from '../../../node_modules/axios/dist/axios.min.js'

// 请求拦截器
// axios.interceptors.request.use((config) => {
//   // 请求之前做什么
//   if (config.method === 'post') {
//     config.data = qs.stringify(config.data)
//   }
//   return config
// }, (err) => {
//   // 请求错误做什么
//   console.log(err)
// })

// // 响应拦截器
// axios.interceptors.response.use((rs) => {
//   return rs
// }, (err) => {
//   console.log(err)
// })

export default (file: any, url: string) => {
  if (!file) {
    return
  }
  console.log(file, 'upload event')
  return new Promise((resolve, reject) => {
    let form = new FormData()
    form.append('file', file)
    console.log(form, 'form')
    const config: object = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    axios.post(url, form, config).then(rs => {
      resolve(rs)
    }, (err) => {
      reject(err)
    }).catch(err => {
      reject(err)
    })
  })
}