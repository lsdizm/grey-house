import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  { path: '/', name: 'home', component: () => Home },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   component: () => import('../views/Dashboard/Layout'),
  //   children: [
  //       {
  //           path: 'indicators',
  //           name: 'dashboard.indicators',
  //           component: () => import('../views/Dashboard/Indicators')
  //       },
  //       {
  //           path: 'backup',
  //           name: 'dashboard.backup',
  //           component: () => import('../views/Dashboard/Backup')
  //       },
  //       {
  //           path: 'logs',
  //           name: 'dashboard.logs',
  //           component: () => import('../views/Dashboard/Logs')
  //       }
  //   ]
  // },
  // {
  //   path: '/helloWorld',
  //   name: 'helloWorld',
  //   component: HelloWorld
  // },
  // {
  //   path: '/old-home',
  //   name: 'home_old',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
