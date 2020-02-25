interface Obj {
  [index: number]: any
}
class HashTable {
  storage = []
  count: number = 0
  limit: number = 7

  hashFunc(key: string, size: number) {
    let hashCode = 0
    for (let i = 0; i < key.length; i++){
      hashCode += 37 + key.charCodeAt(i)
    }
    const index: number = hashCode % size
    return index
  }

  put(key: string, value) {
    const index: number = this.hashFunc(key,this.limit)
    let bucket: Obj | null = this.storage[index]
    if (!bucket) {
      bucket = {}
      this.storage[index] = bucket
    }
    if (!bucket[key]) {
      this.count++
    }
    bucket[key] = value
    // 扩容：条件（容量总数大于最大容量的四分之三时，需要扩充容量）
    if (this.count > this.limit * 0.75) {
      const size: number = this.getPrime(this.limit * 2)
      this.resize(size)
    }
  }

  get(key: string) {
    const index: number = this.hashFunc(key, this.limit)
    if (!this.storage[index]) {
      return
    }

    const bucket: Obj | null = this.storage[index]
    return bucket[key]
  }

  remove(key: string) {
    const index: number = this.hashFunc(key, this.limit)
    if (!this.storage[index]) {
      return false
    }
    const bucket: Obj | null = this.storage[index]
    if (bucket[key]) {
      delete bucket[key]
      this.count--
      // 减容：条件（容量总数小于最大容量的四分之一时，以免造成空间的浪费，所以需要减容）
      if (this.limit > 7 && this.count < this.limit * 0.25) {
        const size = this.getPrime(Math.floor(this.limit / 2))
        this.resize(size)
      }
      return true
    }
    return false
  }

  resize(newSize: number) {
    const oldStorage = this.storage
    this.limit = newSize
    this.count = 0
    this.storage = []

    for (let item of oldStorage) {
      if (!item) {
        continue
      }
      for (let key in item) {
        this.put(key, item[key])
      }
    }
  }

  // 验证某个数是否是质数
  isPrime(num: number): boolean {
    for (let  i: number = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  // 获取质数
  getPrime(num: number): number {
    let baseNum: number = num
    while(!this.isPrime(baseNum)) {
      baseNum++
    }
    return baseNum
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  size(): number {
    return this.count
  }
}

const hash = new HashTable()
hash.put('name', 'hgz')
hash.put('age', 18)
hash.put('hobby', 'none')
console.log(hash.get('name'), 'fdgf')