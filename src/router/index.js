import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import Cart from '@/components/cart';
import Me from '@/components/me';
import Main from '@/components/main';
import Details from '@/components/details';
import Classify from '@/components/classify';
Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/', redirect: 'home'
        },
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: 'me',
          name: 'Me',
          component: Me
        },
        {
          path: 'classify',
          name: 'Classify',
          component: Classify
        }

      ]
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
});
