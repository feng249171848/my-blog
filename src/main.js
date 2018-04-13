// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'
import axios from 'axios'

//axios全局配置
axios.defaults.baseURL="https://wd1182543348jfzvtq.wilddogio.com"
// axios.defaults.headers.common['Authorrization']='Token'
// axios.defaults.headers.post['Content-type']='application/urlencode'
// axios.defaults.headers.get['Accepts']='application/json'

Vue.config.productionTip = false

//Vue.use(VueResource)
Vue.use(VueRouter)

//创建路由
const router=new VueRouter({
  base:"/PersonalBlog/",
  routes:Routes,
  mode:"history"
})

//自定义过滤器
Vue.filter("toUpperCase",function(value){
  return value.toUpperCase()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, //引入路由
})
