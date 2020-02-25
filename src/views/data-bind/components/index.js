import { Compile, observe } from './compile'
export function SelfVue(options) {
  let self = this
  this.data = options.data
  this.methods = options.methods

  Object.keys(this.data).forEach(function (key) {
    self.proxyKeys(key)
  })

  observe(this.data)
  new Compile(options.el, this)
  options.mounted.call(this)
}

SelfVue.prototype = {
  proxyKeys: function (key) {
    let self = this
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function getter() {
        return self.data[key]
      },
      set: function setter(newValue) {
        self.data[key] = newValue
      }
    })
  }
}
