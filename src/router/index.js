import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import login from '../views/Login.vue'
import nosotros from '../views/nosotros.vue'
import Contacto from '../views/contacto.vue'

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
    {
      path: '/nosotros',
      name: 'nosotros',
      component: nosotros,
    },
    {
      path: '/contacto',
      name: 'contactos',
      component: Contacto
    }
  ],
})

export default router
