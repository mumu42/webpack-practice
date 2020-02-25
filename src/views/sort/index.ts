class Sort {
  bubbleSort(list: number[]) {
    // 冒泡排序
    const len = list.length
    let i = len - 1
    while(i >= 0) {
      let j = 0
      while(j < i) {
        // 遍历数组，相邻的数进行比较。如果后一个数比前一个数大，那么两个数的位置进行交换
        // 将第n个大的数换到了，第n个位置之后。倒数第n个位置之后的数，没必要再遍历
        if (list[j] > list[j + 1]) {
          const flag = list[j]
          list[j] = list[j + 1]
          list[j + 1] = flag
        }
        j++
      }
      i--
    }
    return list
  }

  selectSort(list: number[]) {
    // 选择排序
    // let listArr: number[] = list
    console.log(list, 'list')
    const len = list.length
    let i = 0
    while(i < len) {
      let j = i
      // 数组的第i个数之前的数，为部分有序
      let min = {
        index: j,
        value: list[j]
      }
      while(j < len) {
        // 在第i个之后的数中找到最小数
        if (min.value > list[j]) {
          min = {
            index: j,
            value: list[j]
          }
        }
        j++
      }
      if (i !== min.index) {
        // 将找的最小数与第i个数交换
        list[min.index] = list[i]
        list[i] = min.value
      }
      i++
    }
    return list
  }
  
  insertSort(list: number[]) {
    // 插入排序
    const len: number = list.length
    let i = 1
    while(i < len) {
      // 数组的第i个数之前的数，为部分有序数
      let j = i - 1
      const temp = list[i]
      while(j >= 0) {
        // 将第i个数，与之前的数作比较
        // 大于第i个数的数向后移
        // 直到找的第i个数的正确位置并插入
        if (list[j] < temp) {
          list[j + 1] = temp
          break
        } else {
          list[j + 1] = list[j]
        }
        if (j === 0) {
          list[0] = temp
        }
        j--
      }
      i++
    }
    return list
  }

  shellSort(list: number[]) {
    // 希尔排序
    const len = list.length
    let gap = Math.floor(len / 2)

    while(gap > 0) {
      // 以gap为基数分组，排序分组中的数
      for (let i = gap; i < len; i++) {
        let j = i
        let temp = list[i]
        while(j > gap - 1 && list[j - gap] > temp) {
          list[j] = list[j - gap]
          j -= gap
        }
        list[j] = temp
      }
      gap = Math.floor(gap / 2)
    }

    return list
  }

  quickSort(list: number[]) {
    // 快速排序
    this.quickSortRec(list, 0, list.length - 1)
    return list
  }

  quickSortRec(list: number[], left: number, right: number) {
    if (left > right) {
      return
    }
    // 选择最左端的数作为基数
    const temp = list[left]
    let i = left, j = right
    while(i !== j) {
      // 将所有大于基数的数放在右边，将所有小于基数的数放在左边
      while(list[j] >= temp && i < j) {
        j--
      }

      while(list[i] <= temp && i < j) {
        i++
      }

      if (i < j) {
        const t = list[i]
        list[i] = list[j]
        list[j]= t
      }
    }
    // 当两端相遇时，当前位置的数与基数交换
    list[left] = list[i]
    list[i] = temp
    // 继续处理左边
    this.quickSortRec(list, left, i - 1)
    // 继续处理右边
    this.quickSortRec(list, i + 1, right)
  }
}

const list: number[] = [3, 6, 4, 2, 11, 10, 5]
const sorts = new Sort()
console.log(list)
console.log('冒泡排序：', sorts.bubbleSort([3, 6, 4, 2, 11, 10, 5]))
console.log('选择排序：', sorts.selectSort([3, 6, 4, 2, 11, 10, 5]))
console.log('插入排序：', sorts.insertSort([3, 6, 4, 2, 11, 10, 5]))
console.log('希尔排序：', sorts.shellSort([3, 6, 4, 2, 11, 10, 5]))
console.log('快速排序：', sorts.quickSort([3, 6, 4, 2, 11, 10, 5]))
