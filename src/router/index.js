import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/showproduct',
    name: 'showproduct',
    component: () => import('../views/ShowProduct.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import('../views/Customer.vue')
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('../views/student.vue')
  },
   {
    path: '/add_customer',
    name: 'add_customer',
    component: () => import('../views/add_cumtomer.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/product.vue')
  },
{
    path: '/add_product',
    name: 'add_product',
    component: () => import('../views/add_product.vue')
  },







]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
