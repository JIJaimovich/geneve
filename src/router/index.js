import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
// import Us from '../views/Us.vue';
// import Teams from '../views/Teams.vue';
// import Contact from '../views/Contact.vue';
// import Cart from '../views/Cart.vue';

import Home from '@/views/Home.vue';
import Teams from '@/views/Teams.vue';
import Us from '@/views/Us.vue';
import Contact from '@/views/Contact.vue';
import Cart from '@/views/Cart.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/equipes', component: Teams },
  { path: '/club', component: Us },
  { path: '/contact', component: Contact },




  { path: '/cart', component: Cart },

];

//history: createWebHashHistory(import.meta.env.BASE_URL),

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;