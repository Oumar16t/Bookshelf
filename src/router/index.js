import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../Pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/books/add',
      name: 'AddBookPage',
      component: () => import('../Pages/AddBookPage.vue')
    },
    {
      path: '/books/:id',
      name: 'BookPage',
      component: () => import('../Pages/BookPage.vue')
    }
  ]
})

export default router
