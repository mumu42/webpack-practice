import './index.scss'
interface Type{
  [index: string]: any
}

class Stack {
  items:number[] | string[] | Type[] = []
  // 压栈
  push(data: number | string | Type) {
    // this.items.push()
    this.items[this.items.length] = data
    return this.items
  }
  // 出栈
  pop() {
    return this.items.pop()
  }
  // 查看栈顶元素
  peek(): number | string | Type {
    return this.items[this.items.length - 1]
  }
  // 是否为空
  isEmpty(): boolean {
    return this.items.length === 0
  }
  // 个数
  size(): number {
    return this.items.length
  }
  // 字符串返回
  toString (): string {
    return this.items.join(' ')
  }
}

// 栈的应用：十进制转换二进制
function transition (nums: number): string {
  let stack = new Stack()
  let num: number = nums
  while(num >= 0) {
    // 压栈
    stack.push(num % 2)
    num = Math.floor(num / 2)
    if (!num) {
      break
    }
  }
  let str: string = ''
  const len: number = stack.size()
  for (let i: number = 0; i < len; i++) {
    // 出栈
    str += stack.pop()
  }
  return str
}

// console.log('100的二进制：', transition(100))
document.getElementById('btn').onclick = () => {
  let num = <HTMLInputElement>document.getElementById('num')
  const nums: number = Number(num.value)
  const str:string = transition(nums)
  const randerResult: HTMLElement = document.getElementById('result')
  randerResult.innerHTML = str
}
// let a: Type[] = [{'a': 1, 'b': 'c'}]
// a.push({'a': 'asa'})
// console.log(a, 'aaa')
