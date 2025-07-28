import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CMS from '../views/CMS.vue'

/**
 * 路由配置
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'CMS',
    component: CMS
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 