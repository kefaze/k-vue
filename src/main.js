import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'

import axios from 'axios'
import loading from './components/loading'  //自定义全局组件

import store from './store/'

import filters from './filters/'
//console.log(filters.normalTime)
//Vue.filter('normalTime', filters.normalTime);
//遍历出所有过滤器
Object.keys(filters).forEach((key)=>{
  return Vue.filter(key, filters[key])
})

Vue.use(VueRouter)

Vue.use(loading)  //自定义全局组件

require('./assets/css/base.css')  //引入全局样式

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {
  return Promise.reject(error);
});

Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了


const router = new VueRouter({
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes: routerConfig
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
