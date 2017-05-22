import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Page1 from '@/components/Page1';
import v0201 from '@/demo/v0201';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/home', name: 'hello', component: Hello },
    { path: '/page1', name: 'Page1', component: Page1 },
    { path: '/h0201', name: 'v0201', component: v0201 },
  ]
});
