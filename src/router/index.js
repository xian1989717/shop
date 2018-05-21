import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import Cart from '@/components/cart';
import Me from '@/components/me';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
});
