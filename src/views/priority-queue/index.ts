import './index.scss'

interface Type {
  [index: string]: any
}

class PriorityQueue {
  items: QueueElement[] = []
  
  // 添加
  enqueue(element: number | string | Type, priority: number) {
    const len = this.items.length
    const node = new QueueElement(element, priority)
    if (!len) {
      this.items.push(node)
    } else {
      let flag = true
      for (let i: number = 0; i < len; i++) {
        const item = this.items[i]
        if (node.priority > item.priority) {
          this.items.splice(i, 0, node)
          flag = false
          break
        }
      }
      if (flag) {
        this.items.push(node)
      }
    }
    return this.items
  }

  // 删除
  dequeue() {
    return this.items.shift()
  }

  // 清空
  clear() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  toString() {
    const len = this.items.length
    let str = ''
    for (let i = 0; i < len; i++) {
      const item = this.items[len]
      str += item.element
    }
    return str
  }

}

class QueueElement {
  element: Type | number | string
  priority: number
  constructor(element: number | string | Type, priority: number) {
    this.element = element
    this.priority = priority
  }
}

const priority = new PriorityQueue()
priority.enqueue('lili', 0)
priority.enqueue('lisa', 1)
priority.enqueue('samu', 0)
priority.enqueue('cici', 10)
console.log(priority.items)