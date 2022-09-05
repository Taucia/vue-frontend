import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'
import UsersAdmin from '../views/UsersAdmin.vue'
import ProductAdmin from '../views/ProductAdmin.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },{
    path: '/contact',
    name: 'conatct',
    component: Contact
  },
  {
    path: '/admin/:id',
    name: 'admin',
    component: Admin
  },
  {
    path: '/admin/products',
    name: 'adminProducts',
    component:ProductAdmin
  },{
    path: '/admin/users',
    name: 'adminUsers',
    component: UsersAdmin
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
