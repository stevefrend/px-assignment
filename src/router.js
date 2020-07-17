/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CompanyEditPage from './views/CompanyEditPage.vue';
import CompanyPage from './views/CompanyPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/company/:id',
      name: 'CompanyPage',
      component: CompanyPage,
    },
    {
      path: '/company/:id/edit',
      name: 'CompanyEditPage',
      component: CompanyEditPage,
    },
  ],
});
