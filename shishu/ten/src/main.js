// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
    // Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.prototype.HOST = '/api'
require('@/assets/css/app')
import bootstrap from 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})