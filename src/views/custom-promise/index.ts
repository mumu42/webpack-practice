import './index.scss'

// 函数接口
interface Func {
  (...result: string[]): any
}
// 函数传递的参数是函数
interface FuncF {
  (...result: Func[]): any
}

class Promise {
  status: string = 'pending'
  value: string = undefined
  fulfillAry: Func[] = []
  rejectedAry: Func[] = []
  constructor(excutorCallBack: FuncF) {
    let resolveFn = result => {
      if (this.status !== 'pending') {
        return
      }
      setTimeout(() => {
        this.status = 'fulfilled'
        this.value = result
        this.fulfillAry.forEach(item => item(this.value))
      }, 0)
    }

    let rejectFn = reason => {
      if (this.status !== 'pending') {
        return
      }
      setTimeout(() => {
        this.status = 'rejected'
        this.value = reason
        this.rejectedAry.forEach(item => item(this.value))
      }, 0)
    }

    try {
      excutorCallBack(rejectFn, resolveFn)
    } catch (err) {
      rejectFn(err)
    }
  }

  then(fulfilledCallBack, rejectedCallBack) {
    typeof fulfilledCallBack !== 'function' ? fulfilledCallBack = result => result : null
    typeof rejectedCallBack !== 'function' ? rejectedCallBack = reason => {
      throw new Error(reason instanceof Error ? reason.message : reason)
    } : null

    return new Promise((resolve, reject) => {
      this.fulfillAry.push(() => {
        try {
          let x = fulfilledCallBack(this.value)
          x instanceof Promise ? x.then(resolve, reject) : resolve(x)
        } catch(err) {
          reject(err)
        }
      })

      this.rejectedAry.push(() => {
        try {
          let x = rejectedCallBack(this.value)
          x instanceof Promise ? x.then(resolve, reject) : resolve(x)
        } catch (err) {
          reject(err)
        }
      })
    })
  }

  catch(rejectedCallBack) {
    return this.then(null, rejectedCallBack)
  }

  static all(promiseAry = []) {
    let index: number = 0
    let result: string[] = []
    return new Promise((resolve, reject) => {
      for (let i: number = 0; i < promiseAry.length; i++) {
        promiseAry[i].then(val => {
          index++
          result[i] = val
          if (index === promiseAry.length) {
            resolve(result[i])
          }
        }, reject)
      }
    })
  }

  static race(promiseAry) {
    return new Promise((resolve, reject) => {
      if (promiseAry.length === 0) {
        return
      }

      for (let i: number = 0; i < promiseAry.length; i++) {
        promiseAry[i].then(val => {
          resolve(val)
          return
        }, reject)
      }
    })
  }

  static resolve(value) {
    if (value instanceof Promise) {
      return value
    }
    return new Promise(resolve => resolve(value))
  }

  static reject(value) {
    return new Promise((resolve, reject) => reject(value))
  }
}

new Promise(() => {
  console.log('sds')
}).then(() => {
  console.log('resolve')
}, () => {
  console.log('reject')
})