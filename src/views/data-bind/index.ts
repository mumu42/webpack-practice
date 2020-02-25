import './index.scss'
import './components/observer.js'
import './components/watcher.js'
import './components/compile.js'
import { SelfVue } from './components/index.js'

new SelfVue({
    el: '#app',
    data: {
        title: 'hello world',
        name: 'canfoo'
    },
    methods: {
        clickMe: function () {
            this.title = 'hello world'
        }
    },
    mounted: function () {
        window.setTimeout(() => {
            this.title = '你好'
        }, 1000)
    },
})