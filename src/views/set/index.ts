// interface Obj {
//   [name: string]: any
// }
class SetCustom {
  item = {}
  // 添加
  add(value: number | string) {
    if (this.has(value)) {
      return false
    }
    this.item[value + ''] = value
    return true
  }
  // 是否存在
  has(value: number | string) {
    return this.item.hasOwnProperty(value)
  }

  remove(value: number | string) {
    if (this.has(value)) {
      delete this.item[value + '']
    }
    return true
  }

  clear() {
    // 直接赋值成一个新的对象，旧的对象因为没有被引用会被回收的
    this.item = {}
    return true
  }

  size() {
    return Object.keys(this.item).length
  }

  values() {
    return Object.keys(this.item)
  }

  // 求并集
  union(otherSet: SetCustom) {
    let unionSet = new SetCustom()
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    values = otherSet.values()
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    return unionSet.values()
  }

  // 求交集
  interSection(otherSet: SetCustom) {
    let interSection = new SetCustom()
    const values = this.values()
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        interSection.add(values[i])
      }
    }
    return interSection.values()
  }

  // 求差集
  diff(otherSet: SetCustom) {
    let difference = new SetCustom()
    const values = this.values()
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        difference.add(values[i])
      }
    }
    return difference.values()
  }
  // 一个集合是否是另一个集合的子集
  subSet(otherSet: SetCustom) {
    const values = this.values()
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        return false
      }
    }
    return true
  }
}

const set = new SetCustom()
set.add(1)
set.add(2)
set.add(3)
const otherSet = new SetCustom()
otherSet.add(3)
otherSet.add(4)
otherSet.add(5)
console.log(set.values(), '集合1')
console.log(otherSet.values(), '集合2')
console.log(set.union(otherSet), '并集')
console.log(set.interSection(otherSet), '交集')
console.log(set.diff(otherSet), '差集')
console.log(set.subSet(otherSet), '是否是子集')
