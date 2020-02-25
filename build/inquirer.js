const inquirer = require('inquirer')
const fuzzy = require('fuzzy')
const path = require('path')
const fs = require('fs')

const modules = fs.readdirSync(path.resolve(__dirname, `../src/views`))

function selectModule (answers, input) {
  return new Promise(resolve => {
    setTimeout(() => {
      const fuzzyResult = fuzzy.filter(input || '', modules)
      resolve(fuzzyResult.map(el => el.original))
    }, 30)
  })
}

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

const prompt = [
  {
    type: 'autocomplete',
    name: 'module',
    message: 'select a modules to start',
    source: selectModule,
    pageSize: 20
  }
]

module.exports = (callback) => {
  inquirer.prompt(prompt).then(answers => {
    callback && callback(answers)
  })
}
