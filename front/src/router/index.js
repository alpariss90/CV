import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import IndexPage from '../views/pages/IndexPage.vue'

const routes= [
  {
    path: '/',
    redirect: '/index/2'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/index/:lang',
    name: 'Index',
    component: IndexPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
