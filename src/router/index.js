import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue';
import Heroes from '../views/Heroes.vue';
import NotFound from '@/views/NotFound.vue'
import LoginComp from '../components/Login.vue';
import DetallesView from '../views/DetallesView.vue';

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: Heroes,
    meta:{
      Login: true
    }    
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComp,
  },
  {
    path: '/detalles',
    name: 'detallesview',
    component: DetallesView,    
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next(); // Permite la navegación sin restricciones
});
    

export default router

