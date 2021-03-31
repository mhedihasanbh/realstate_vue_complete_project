import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/our-project',
    name: 'Project',

    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue')
  },
  {
    path: '/Carrer-page',
    name: 'Carrer',

    component: () => import(/* webpackChunkName: "Carrer" */ '../views/Carrer.vue')
  },
  {
    path: '/contact-kor-beta-amader-sate',
    name: 'Contact',

    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
