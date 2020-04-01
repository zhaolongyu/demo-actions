import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from "../store/index";
import routes from './merge.js'
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

export default router
