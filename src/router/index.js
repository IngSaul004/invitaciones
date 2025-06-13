import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
  ],
})

export default router
