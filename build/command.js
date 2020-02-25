const cmd = require('commander')
const inquirer = require('./inquirer')
const devServer = require('./devServer')
const build = require('./build')

cmd
  .option('-d, --dev', 'select a module to work')
  .option('-b, --build', 'build start')
  .parse(process.argv)

if (cmd.dev) {
  inquirer(ans => {
    devServer(ans.module)
  })
}

if (cmd.build) {
  build()
}
