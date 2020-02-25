
// interface Obj {
//   [index: string]: any
// }

class DoubleLinked {
  length: number = 0
  // 头
  head: null | DoubleNode = null
  // 尾
  tail: null | DoubleNode = null

  append(data: number | string) {
    const node = new DoubleNode(data)
    if (!this.length) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return true
  }
  // 正向遍历
  forwardString(): string {
    let str = ''
    let current: null | DoubleNode = this.head
    while(current.next) {
      str += `${current.data},`
      current = current.next
    }
    str += current.data
    return str
  }

  // 反向遍历
  backString(): string {
    let str = ''
    let current: null | DoubleNode = this.tail
    while(current.prev) {
      str += `${current.data},`
      current = current.prev
    }
    str += current.data
    return str
  }

  insert(position: number, data: number | string) {
    if (position < 0 || position > this.length) {
      return false
    }

    if (!this.length || position === this.length) {
      this.append(data)
    }

    const node: DoubleNode = new DoubleNode(data)
    let current: null | DoubleNode = this.head
    let prev: null | DoubleNode = null
    let index: number = 0

    while(index++ < position) {
      prev = current
      current = current.next
    }

    node.prev = prev
    prev.next = node
    current.prev = node
    node.next = current

    if (position === 0) {
      node.next = this.head
      this.head = node
    }

    this.length++
    return true
  }

  get(position: number){
    if (position < 0 || position >= this.length) {
      return
    }
    let index: number = 0
    let current: null | DoubleNode = this.head
    if (position > this.length / 2) {
      current = this.tail
      index = this.length - 1
      while (index-- > position) {
        current = current.prev
      }
    } else {
      while (index++ < position) {
        current = current.next
      }
    }

    return current.data
  }

  indexOf(data: number | string) {
    let current: null | DoubleNode = this.head
    let index: number = 0
    while (current.next) {
      if (current.data === data) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  removeAt(position: number) {
    if (position < 0 || position >= this.length) {
      return false
    }
    if (!position) {
      if (this.length === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
    } else if (position === this.length - 1) {
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      let current: null | DoubleNode = this.head
      let prev: null | DoubleNode = null
      let index: number = 0
      while (index++ < position) {
        prev = current
        current = current.next
      }
      prev.next = current.next
      prev.next && (current.next.prev = prev)
    }
    this.length--
    return true
  }

  remove(data: number | string) {
    return this.removeAt(this.indexOf(data))
  }

  update(position: number, data: number | string) {
    if (position < 0 || position >= this.length) {
      return false
    }

    let index: number = 0
    let current: null | DoubleNode = this.head
    while (index++ < position) {
      current = current.next
    }
    current.data = data
    return true
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }
}

class DoubleNode {
  data: number | string
  next: null | DoubleNode = null
  prev: null | DoubleNode = null
  constructor(data: number | string) {
    this.data = data
  }
}

const doublink = new DoubleLinked()
doublink.append('a1')
doublink.append('a2')
doublink.append('a3')
doublink.append('a4')
doublink.insert(2, '2222222')
console.log(doublink.update(4, 'jksjdksdj'), 'update')
console.log(doublink.forwardString())
console.log(doublink.backString())
console.log(doublink.get(0), 'get')