// interface Obj {
//   [type: string]: any
// }
class LinkedList {
  head = null
  length: number = 0

  // 追加
  append(data: number | string) {
    let node = new LinkedNode(data, null)
    if (!this.length) {
      this.head = node
    } else {
      let current: LinkedNode = this.head
      while (current.next) {
        current = current.next
      }

      current.next = node
    }
    this.length++
  }
  // 插入
  insert(position: number, data: number | string): boolean {
    if (position < 0 || position > this.length) {
      return false
    }
    let node = new LinkedNode(data, null)
    if (!position) {
      node.next = this.head
      this.head = node
    } else {
      let index: number = 0
      let current: LinkedNode = this.head
      let provide: LinkedNode = this.head
      while (index++ < position) {
        provide = current
        current = current.next
      }
      provide.next = node
      node.next = current
    }
    this.length++
    return true
  }

  // 根据位置查找数据
  get(position: number) {
    if (position < 0 || position >= this.length) {
      return
    }
    let current: LinkedNode = this.head
    let index: number = 0

    while (index++ < position) {
      current = current.next
    }
    return current.data
  }

  // 根据数据查找位置
  indexOf(data: number | string): number {
    let current: LinkedNode = this.head
    let index: number = 0
    while (current) {
      if (current.data === data) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }
  // 给指定的位置更改为指定的数据
  updata(position: number, data: number | string) {
    if (position < 0 || position >= this.length) {
      return false
    }

    let index: number = 0
    let current = this.head
    while (index++ < position) {
      current = current.next
    }
    current.data = data
    return true
  }
  // 删除指定位置的数据
  removeAt(position: number) {
    if (position < 0 || position >= this.length) {
      return false
    }
    if (position === 0) {
      this.head = this.head.next
    } else {
      let index: number = 0
      let current: LinkedNode = this.head
      let provide: LinkedNode = this.head
      while (index++ < position) {
        provide = current
        current = current.next
      }
      provide.next = current.next
    }
    if (this.length) {
      this.length--
    }
    return true
  }
  // 删除指定的数据
  remove(data: number | string) {
    const index: number = this.indexOf(data)
    return this.removeAt(index)
  }
  // 判空
  isEmpty() {
    if (this.head) {
      return true
    }
    return false
  }
  // 大小
  size() {
    return this.length
  }
  // 字符串返回
  toString(): string {
    let str: string = ''
    let current: LinkedNode = this.head
    while (current.next) {
      str += current.data
      current = current.next
    }
    return str
  }
}
class LinkedNode {
  data: number | string
  next
  constructor(data: number | string, next) {
    this.data = data
    this.next = next
  }
}

const link = new LinkedList()
link.append('a1')
link.append('a2')
link.insert(1, 'aa')
link.updata(0, '更改第0个')
link.removeAt(0)
link.remove('aa')
link.append('讷讷')
link.append('好好')
console.log(link.get(0), 'get')
console.log(link.indexOf('好好'), 'indexOf')
console.log(link, 'link')

/**
 * webpack和grunt、gulp的对比：
 *  ① grunt/gulp的核心是task
 *    1) 配置一系列的task，并定义task要处理的事务。
 *    2) 让grunt/gulp来依次执行这些task，而且让整个流程自动化。
 *    3) 所以grunt/gulp也被称为前端自动化任务管理工具
 *  ② 什么时候使用grunt/gulp
 *    1) 模块化依赖管理简单，甚至没有用到模块化的概念
 *    2) 只需要进行简单的合并、压缩
 *  ③ 什么时候使用webpack
 *    1) 使用了模块化管理，而且相互依赖非常强
 *
 * webpack和grunt\gulp的区别：
 *  ① grunt\gulp更加强调的是前端流程的自动化，模块化不是它的核心
 *  ② webpack更加强调模块化开发管理，而文件压缩合并、预处理功能，是他的附带的功能。
 */