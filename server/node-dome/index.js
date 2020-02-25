const net = require('net')
const chatServer = net.createServer()
chatServer.on('connection', (client) => {
  client.write('Hi!\n')
  client.on('data', (data) => {
    console.log(data)
  })
})
chatServer.listen(9000)
console.log('chat in 9000')
