/**
 * 基于hash的前端路由
 */
class Routers {
	routes = {}
	currentUrl = ''
	constructor() {
		this.refresh = this.refresh.bind(this)
		window.addEventListener('load', this.refresh, false)
		window.addEventListener('hashchange', this.refresh, false)
	}
	// route(path, callback) {
	// 	this.routes[path] = callback || function () { }
	// }
	refresh() {
		this.currentUrl = location.hash.slice(1) || '/'
		// this.routes[this.currentUrl]()
	}
}

let Router = new Routers()
const content = document.querySelector('body')
// change Page anything
function changeBgColor(color: string) {
	content.style.backgroundColor = color
}
// Router.route('/', function () {
// 	changeBgColor('yellow')
// })
// Router.route('/blue', function () {
// 	changeBgColor('blue')
// })
// Router.route('/green', function () {
// 	changeBgColor('green')
// })

// js设置hash
// window.location.hash = `#${path}`



/**
 * 基于history的前端路由
 */
class RoutersByHistory {
	routes = {}
	constructor() {
		this._bindPopState()
	}
	init(path) {
		// 修改历史记录
		history.replaceState({ path: path }, null, path)
		this.routes[path] && this.routes[path]()
	}

	route(path, callback) {
		this.routes[path] = callback || function () { }
	}

	go(path) {
		// 添加历史记录
		history.pushState({ path: path }, null, path)
		this.routes[path] && this.routes[path]()
	}
	_bindPopState() {
		/**
		 * 处于激活状态的历史记录条目发生变化时
		 * 由history.pushState()方法创建
		 * 或者由history.replaceState()方法修改过的
		 */
		window.addEventListener('popstate', e => {
			const path = e.state && e.state.path
			this.routes[path] && this.routes[path]()
		})
	}
}

let router = new RoutersByHistory()
router.init(location.pathname)
// const content = document.querySelector('body')
const ul = document.querySelectorAll('ul')[1]

router.route('/', function () {
	changeBgColor('yellow')
})
router.route('/blue', function () {
	changeBgColor('blue')
})
router.route('/green', function () {
	changeBgColor('green')
})

ul.addEventListener('click', e => {
	const a = <Element>e.target
	// if (e.target.tagName === 'A') {
	e.preventDefault()
	router.go(a.getAttribute('href'))
	// }
})

/**
 * 路由
 * 	通过互联网把信息从源地址传输到目的地址的活动
 *
 * 后端路由
 * 	① 后端渲染/服务器渲染：在服务器渲染好整个样式发给相应的网页（URL）
 * 	② 后端处理URL与页面之间的映射
 * 	③ 缺点：维护比较麻烦
 *
 * 前端路由
 * 	① 前端处理URL与页面的映射关系
 */
