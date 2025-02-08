import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/store'

const routes = [
    {
        path: '/login',
        name:'Login',
        alias:'/',
        component: ()=> import('../views/LoginView.vue'),
        meta:{
            layout:'auth',
            auth: false
          }
    },
    {
        path: '/home',
        name: 'home',
        component: ()=> import('../views/HomeView.vue'),
        meta:{
            layout:'main',
            auth:true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.auth.user;
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else if(to.path === '/login' && isAuthenticated){
    next('/home');
  } else {
    next();
  }
})

export default router;