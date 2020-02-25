const express = require('express')
// const fs = require('fs')
let router = express.Router()
const moduleUpload = require('./upload')

// 上传文件
router.post('/upload', moduleUpload.upload)

router.post('/getUploadAll', moduleUpload.getMoreFile)

module.exports = router
