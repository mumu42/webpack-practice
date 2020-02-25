import './index.scss'
interface Type {
  [index: string]: any
}
class Queue {
  items: string[] | number[] | Type[] = []
  // 添加（从后添加）
  enqueue(data: number | string | Type) {
    const len: number = this.items.length
    this.items[len] = data
    return this.items
  }

  // 删除（从前删除）
  dequeue() {
    return this.items.shift()
  }

  // 查看顶端元素
  front() {
    return this.items[0]
  }

  // 是否为空
  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }

  toString() {
    return this.items.join(',')
  }
}

function getTime(times: number): string {
  if (times <= 0) {
    return '00:00:00'
  }
  let h = Math.floor(times / (60 * 60 * 1000))
  times = times % (60 * 60 * 1000)
  let s = Math.floor(times / (60 * 1000))
  times = times % (60 * 1000)
  let m = Math.floor(times / 1000)
  let str:string = ''
  str += h >= 10 ? `${h}:` : `0${h}:`
  str += s >= 10 ? `${s}:` : `0${s}:`
  str += m >= 10 ? m : `0${m}`
  return str
}

// 队列的应用
let queue: Queue = new Queue()
let distance: number = 0
let start, pause, timer
const result = <HTMLElement>document.getElementsByClassName('result')[0]
const timerBox = <HTMLElement>document.getElementsByClassName('time')[0]
document.getElementById('add').onclick = () => {
  if (queue.size()) {
    alert('上一轮游戏还未结束，现将强制结束游戏，开始新的游戏')
    queue.clear()
    result.innerHTML += '<p>游戏强制结束~</p>'
  }
  const ele = <HTMLInputElement>document.getElementById('users')
  const users = ele.value.trim().split(' ')
  let flag: boolean = false
  for (let i: number = 0; i < users.length; i++) {
    const item = users[i]
    if (!item) {
      continue
    }
    flag = true
    queue.enqueue(item)
  }
  if (!flag) {
    window.alert('请输入人员名字！')
  } else {
    alert('游戏人员添加成功，可以点击开始按钮，开始游戏了~')
  }
}

document.getElementById('start').onclick = () => {
  start = new Date().getTime()
  timerBox.innerHTML = '00:00:00'
  result.innerHTML = '<p>游戏开始</p>'
  timer = setInterval(() => {
    pause = new Date().getTime()
    distance = pause - start
    timerBox.innerHTML = getTime(distance)
    queue.enqueue(queue.dequeue())
  }, 1000)
}

document.getElementById('pause').onclick = () => {
  clearInterval(timer)
  const user: number | string | Type = queue.dequeue()
  result.innerHTML += `<p>${user}淘汰，历时：${timerBox.innerHTML}</p>`
  if (queue.size() === 1) {
    result.innerHTML += `<p class='win'>游戏结束，${queue.front()}胜出</p>`
    queue.clear()
  }
}
