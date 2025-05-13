import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Teams from '@/views/Teams.vue';
import Us from '@/views/Us.vue';
import Contact from '@/views/Contact.vue';
import Cart from '@/views/Cart.vue';
import TeamDetail from '@/views/TeamDetail.vue';
import SponsorsView from '../views/SponsorsView.vue';

const routes = [
  { path: '/', component: Home },
  { 
    path: '/equipes', 
    component: Teams,
    children: [
      {
        path: ':teamId',
        component: TeamDetail,
      }
    ] 
  },
  { path: '/club', component: Us },
  { path: '/contact', component: Contact },
  { path: '/sponsors', component: SponsorsView },




  { path: '/cart', component: Cart },

];

//history: createWebHashHistory(import.meta.env.BASE_URL),

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export default router;