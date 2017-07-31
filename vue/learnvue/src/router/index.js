import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Special from '@/view/Special'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home
        }, {
            path: '/home',
            component: Home
        },
        {
            path: '/special',
            component: Special
        }
    ]
})