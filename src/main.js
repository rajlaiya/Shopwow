import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { createRouter, createWebHistory } from 'vue-router';
import About from './pages/About.vue';
import Man from './components/man.vue';
import Woman from './components/woman.vue';
import Children from './components/children.vue';
import Cart from './pages/Cart.vue';
import Contact from './pages/Contact.vue';

const routes = [
  { path: '/', component: About },
  { path: '/about', component: About },
  { path: '/man', component: Man },
  { path: '/woman', component: Woman },
  { path: '/children', component: Children },
  { path: '/cart', component: Cart },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
