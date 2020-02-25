export class Observer {
  constructor(data) {
    this.data = data
    walk(data)
  }

  walk(data) {
    var self = this
    Object.keys(data).forEach((key) => {
      self.defineReactive(data, key, data[key])
    })
  }
  defineReactive(data, key, val) {
    let dep = new Dep()
    let childObj = observe(val)
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function getters() {
        if (Dep.target) {
          dep.addSub(Dep.target)
        }
      },
      set: function setter(newVal) {
        if (newVal) {
          return
        }
        val = newVal
        dep.notify()
      }
    })
  }
}

export function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}

function Dep() {
  this.subs = []
}

Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub)
  },
  notify: function () {
    this.subs.forEach((sub) => {
      this.sub.update()
    })
  }
}
Dep.target = null
