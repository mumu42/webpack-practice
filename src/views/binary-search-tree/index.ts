interface Obj {
  [index: string]: string | number | string[] | number[]
}
interface Arr {
  [index: number]: string | number | string[] | number[]
}
class BinarySearchTree {
  root: null | TreeNode = null
  result: number | string | Obj | Arr

  insert(key: string | number) {
    const node = new TreeNode(key)
    if (!this.root) {
      this.root = node
    } else {
      this.insertCycle(this.root, node)
    }
  }

  preOrderTraversal() {
    this.preOrderTraversalRecursive(this.root, [])
    return this.result
  }
  // 插入子节点（递归）
  insertRecursive(node: null | TreeNode, insertNode: TreeNode) {
    if (node.key < insertNode.key) {
      if (!node.right) {
        node.right = insertNode
        return
      }
      this.insertRecursive(node.right, insertNode)
    } else {
      if (!node.left) {
        node.left = insertNode
        return
      }
      this.insertRecursive(node.left, insertNode)
    }
  }
  // 插入子节点（循环）
  insertCycle(node: null | TreeNode, insertNode: TreeNode) {
    let current: null | TreeNode = node
    while (current) {
      if (current.key > insertNode.key) {
        if (!current.left) {
          current.left = insertNode
          return true
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = insertNode
          return true
        }
        current = current.right
      }
    }
    return false
  }

  /**
   * 先序遍历
   *    ① 访问根节点
   *    ② 遍历其左节点
   *    ③ 遍历其右节点
   */
  preOrderTraversalRecursive(node: null | TreeNode, result: string[] | number[]) {
    if (!node) {
      let str: string = ''
      str = result.join(',')
      this.result = str
      return
    }
    const len = result.length
    result[len] = node.key
    this.preOrderTraversalRecursive(node.left, result)
    this.preOrderTraversalRecursive(node.right, result)
  }

  /**
   * 中序遍历
   *    ① 遍历其左子树
   *    ② 访问根节点
   *    ③ 遍历其右子树
   */
  inOrderTraversal() {
    this.inOrderTraversalRecursive(this.root, [])
    return this.result
  }
  inOrderTraversalRecursive(node: null | TreeNode, result: string[] | number[]) {
    if (!node) {
      this.result = result.join(',')
      return
    }
    this.inOrderTraversalRecursive(node.left, result)
    const len = result.length
    result[len] = node.key
    this.inOrderTraversalRecursive(node.right, result)
  }

  /**
   * 后序遍历
   *    ① 遍历其左子树
   *    ② 遍历其右子树
   *    ③ 访问根节点
   */
  postOrderTraversal() {
    this.postOrderTraversalRecursive(this.root, [])
    return this.result
  }
  postOrderTraversalRecursive(node: null | TreeNode, result: string[] | number[]) {
    if (!node) {
      return
    }
    this.postOrderTraversalRecursive(node.left, result)
    this.postOrderTraversalRecursive(node.right, result)
    const len = result.length
    result[len] = node.key
    this.result = result.join(',')
  }

  max() {
    let maxKey = this.root.key
    let current: null | TreeNode = this.root
    while(current) {
      maxKey = current.key
      current = current.right
    }
    return maxKey
  }

  min() {
    let minKey = this.root.key
    let current: null | TreeNode = this.root
    while(current) {
      minKey = current.key
      current = current.left
    }
    return minKey
  }

  search(key: string | number) {
    let current: null | TreeNode = this.root
    while(current) {
      if (key > current.key) {
        current = current.right
      } else if (key < current.key) {
        current = current.left
      } else {
        return true
      }
    }
    return false
  }

  remove(key: number | string) {
    let current: null | TreeNode = this.root
    let parent: null | TreeNode = this.root
    let isLeft = true
    if (!current) {
      return false
    }
    while (current.key !== key) {
      parent = current
      if (current.key < key) {
        isLeft = false
        current = current.right
      } else {
        isLeft = true
        current = current.left
      }

      if (!current) {
        return false
      }
    }
    if (!current.left && !current.right) {
      // 没有字节点
      if (current === this.root) {
        this.root = null
      } else {
        if (isLeft) {
          parent.left = null
        } else {
          parent.right = null
        }
      }
    } else if (current.left && current.right) {
      // 找左子树中最大的节点或者右子树中最小的节点来代替当前节点。
      // 以找左子树中的最大节点替换为例
      let leftMaxNode = current.left
      let maxNodeParent = null
      while (leftMaxNode) {
        if (!leftMaxNode.right) {
          break
        }
        maxNodeParent = leftMaxNode
        leftMaxNode = leftMaxNode.right
      }

      if (current === this.root) {
        this.root = leftMaxNode
      } else if (isLeft) {
        parent.left = leftMaxNode
      } else {
        parent.right = leftMaxNode
      }
      leftMaxNode.left = current.left
      leftMaxNode.right = current.right
      maxNodeParent.right = null
    } else if (current.left) {
      // 只有左子节点
      if (current === this.root) {
        this.root = current.left
      } else if (isLeft) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else if (current.right) {
      // 只有右子节点
      if (this.root === current) {
        this.root = current.right
      } else if (isLeft) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    }
    return true
  }
}

class TreeNode {
  key: string | number = null
  left: null | TreeNode = null
  right: null | TreeNode = null

  constructor(key: number | string) {
    this.key = key
  }
}

const treeNode = new BinarySearchTree()
treeNode.insert(11)
treeNode.insert(7)
treeNode.insert(15)
treeNode.insert(5)
treeNode.insert(3)
treeNode.insert(9)
treeNode.insert(8)
treeNode.insert(10)
treeNode.insert(13)
treeNode.insert(12)
treeNode.insert(14)
treeNode.insert(20)
treeNode.insert(18)
treeNode.insert(25)
treeNode.insert(6)
console.log(treeNode.root, 'root')
console.log(treeNode.preOrderTraversal(), 'pre')
console.log(treeNode.inOrderTraversal(), 'in')
console.log(treeNode.postOrderTraversal(), 'post')
console.log(treeNode.min(), 'min')
console.log(treeNode.max(), 'min')
console.log(treeNode.search(30), 'search')
console.log(treeNode.remove(11), 'remove')
console.log(treeNode.root, 'root')
// console.log(treeNode.preOrderTraversalCycle(treeNode.root))