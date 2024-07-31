import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import HomePage from '@/views/HomePage.vue';

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;