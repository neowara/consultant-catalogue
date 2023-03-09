import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import ConsultantView from '../views/ConsultantView.vue';

Vue.use(VueRouter);

const Routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/consultant/:id',
    name: 'ConsultantDetails',
    component: ConsultantView
  }
]

const router = new VueRouter({
  mode: "history",
  routes: Routes
});


export default router;