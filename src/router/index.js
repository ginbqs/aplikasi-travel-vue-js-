import { createRouter, createWebHistory } from 'vue-router'
import BusView from '../views/BusView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bus',
      name: 'bus',
      component: BusView
    }
  ]
})

export default router
