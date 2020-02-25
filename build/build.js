const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const spinner = ora('building for production ...')
const fs = require('fs')
const modules = () => fs.readdirSync(path.resolve(__dirname, '../src/views'))

module.exports = () => {
  spinner.start()
  rm(path.resolve(__dirname, '../dist'), err => {
    err && console.log('build err: ', err)
  })

  modules().map(item => {
    require('./webpack.prod')(item)
  })
  spinner.stop()
}
