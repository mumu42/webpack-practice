const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const router = require('./router')
// const moduleUpload = require('./upload')

server.use(bodyParser())
server.use(express.static('./static'))

server.use('/index', (req, res) => {
  res.json({code: 0, data: [1, 2, 3]})
})

// moduleUpload.getExcel()

server.use(router)

server.listen(3000, () => {
  console.log('port: 3000')
})
