interface GraphVertex {
  [index: string]: string[] | number[]
}

interface Obj {
  [index: string]: number
}

class Graph {
  vertexes: GraphVertex = {}
  colors: Obj = {}
  dfsValue: string = ''

  addVertex(v: string): void {
    // 添加顶点
    this.vertexes[v] = []
  }

  addEdge(v: string, m: string): boolean {
    // 添加边
    if (!this.vertexes[v] || !this.vertexes[m]) {
      return false
    }
    const len1: number = this.vertexes[v].length
    const len2: number = this.vertexes[m].length
    this.vertexes[v][len1] = m
    this.vertexes[m][len2] = v
    return true
  }

  initVertex(): void {
    // 初始化顶点
    // 1：该顶点还没有被访问
    // -1：该顶点被访问，但未被探测
    // 0：该顶点被访问且被探测
    for (let key in this.vertexes) {
      this.colors[key] = 1
    }
  }

  bfs(): string {
    // 广度优先搜索
    // 从指定的第一个顶点开始遍历图，先访问其所有相邻的顶点

    this.initVertex()
    const list: GraphVertex = this.vertexes
    let str: string = ''
    for (let key in list) {
      if (!this.colors) {
        break
      }
      if (this.colors[key] > 0) {
        str += `${key} `
        this.colors[key] = -1
      }
      let i = 0
      while(list[key][i]) {
        this.colors[list[key][i]] > 0 && (str += `${list[key][i]} `)
        this.colors[list[key][i]] = -1
        i++
      }
      this.colors[key] = 0
    }
    return str
  }

  dfs() {
    // 深度优先搜索
    // 从第一个指定的顶点开始遍历图，沿着其中一条路径往下走，直到走到最后
    // 接着原路回退并探测另一条路径

    this.initVertex()
    for (let key in this.vertexes) {
      if (this.colors[key] === 1) {
        this.dfsVisit(key)
      }
    }
  }

  dfsVisit(key: string) {
    this.colors[key] = -1
    this.dfsValue += `${key} `
    const list: string[] | number[] = this.vertexes[key]
    for (let i = 0; i < list.length; i++) {
      if (this.colors[list[i]] === 1) {
        this.dfsVisit(`${list[i]}`)
      }
    }
    this.colors[key] = 0
  }

  toString(): string {
    let str: string = ''
    const list = this.vertexes
    for (let key in list) {
      str += `${key} ---> `
      let i = 0
      while(list[key][i]) {
        str += `${list[key][i]} `
        i++
      }
      str += '\n'
    }
    return str
  }
}

const graph = new Graph()
const myVertexes: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
for (let i = 0; i < myVertexes.length; i++) {
  graph.addVertex(myVertexes[i])
}

// 添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph)
console.log(graph.toString(), 'ggg')
console.log(graph.bfs(), '广度优先')
graph.dfs()
console.log(graph.dfsValue, '深度优先')
