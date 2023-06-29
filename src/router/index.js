import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: () => Home },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/dashboard', name: 'dashboard', component: () => import('../views/DashBoardView.vue') },
  { path: '/product-item', name: 'productItem', component: () => import('../views/ProductItemView.vue') },
  { path: '/stock-in', name: 'stockIn', component: () => import('../views/StockInView.vue') },
  { path: '/stock-out', name: 'stockOut', component: () => import('../views/StockOutView.vue') },
  { path: '/statistic', name: 'statistic', component: () => import('../views/StatisticView.vue') },
  { path: '/environment', name: 'environment', component: () => import('../views/EnvironmentView.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// to-do login 유효성 검증후 통과하지 못하면 login page 로 이동
router.beforeEach((from, to, next) => {
  console.log(from)
  console.log(to)
  next()
})

export default router
