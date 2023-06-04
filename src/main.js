import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import mtyUi from 'witchelaina-mty-ui';
import App from './App.vue';

import ActionComponents from './ActionComponents.vue';
import InputComponents from './InputComponents.vue';
import HomePage from './HomePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/Actions', component: ActionComponents },
  { path: '/Inputs', component: InputComponents },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(mtyUi);
app.mount('#app');
