const webpackDevServer = require('webpack-dev-server')
const path = require('path')
const webpack = require('webpack')

module.exports = (module) => {
  const port = Math.floor(Math.random() * 10000)
  const compiler = webpack(require('./webpack.dev')(module))
  const serverConfig = {
    contentBase: path.resolve(__dirname, `../dist`),
    index: `${module}.index.html`,
    port,
    open: true,
    compress: true,
    hot: true,
    quiet: true,
    historyApiFallback: true,
    overlay: true,
    watchOptions: {
      aggregateTimeout: 3000
    },
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
  new webpackDevServer(compiler, serverConfig).listen(port, 'localhost', (err) => {
    err && console.log('server err: ', err)
    console.log(`Working at module ${module}`)
    console.log(`Listening at http://localhost:${port}`)
  })
}
