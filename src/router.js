import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shape from './views/SearchByShape.vue'
import Shape2 from './views/SearchByShape2.vue'
import Fishstats from './views/FishStats.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/shape',
      name: 'shape',
      component: Shape
    },
    {
      path: '/shape/:id',
      name: 'shape2',
      component: Shape2
    },
    {
      path: '/shape/:fromId/:fish',
      name: 'fishstats',
      component: Fishstats
    }
  ]
})
