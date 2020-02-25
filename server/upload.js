const Module = require('./module')
const formidable = require('formidable')
const fs = require('fs')
const xlsx = require('node-xlsx')
// const path = require('path')

module.exports.upload = (req, res) => {
  let form = new formidable.IncomingForm()
  form.uploadDir = './static/upload'
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    // 当服务端全部收完客户端用post方式提交的表单数据之后，触发执行该回调函数。
    // 以post方式提交的表单域数据都放在fields中
    // 以post方式上传的文件、图片等文件域数据都放在files中
    console.log(err, 'error')
    if (err) {
      return res.json({code: 0, msg: err})
    }
    console.log(files)
    let path = files
    // path = path[path.length - 1]
    // path = `/upload/${path}`
    Module.insert({
      table: 'file',
      keys: 'path',
      nums: '?',
      values: [path]
    }).then(() => {
      return res.json({code: 200, result: true})
    }).catch(err => {
      return res.json({code: 0, msg: err})
    })
  })
}

module.exports.getMoreFile = (req, res) => {
  Module.select({
    values: '*',
    table: 'file'
  }).then(result => {
    return res.json({code: 200, data: result})
  }).catch(err => {
    return res.json({code: 0, mag: err})
  })
}

module.exports.getExcel = () => {
  // 将表数据生成Excel表
  Module.select({
    values: '*',
    table: 'file'
  }).then(result => {
    let data = [['序号', '地址']]
    for (let i = 0; i < result.length; i++) {
      let arr = []
      let value = result[i]
      for (let key in value) {
        arr.push(value[key])
      }
      data.push(arr)
    }
    console.log(data, 'data')
    let buffer = xlsx.build([{
      name: 'file',
      data
    }])
    fs.writeFileSync('./server/static/file/file.xlsx', buffer, (err) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('success')
    })
  })
}
