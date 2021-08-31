import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
import User from '@/views/user/User.vue'

Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/user', component: User }
]

const router = new VueRouter({
  routes
})

export default router
