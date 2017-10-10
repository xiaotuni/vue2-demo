import Vue from 'vue';
import Router from 'vue-router';
import v0201 from '@/demo/v0201';
import { PageInfo } from '../containers/core';
const { Default, Hello, Page1, RefreshPage, DataMap } = PageInfo;
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/home', name: 'hello', component: Hello },
    { path: '/page1', name: 'Page1', component: Page1 },
    { path: '/h0201', name: 'v0201', component: v0201 },
    { path: '/refreshpage', name: 'RefreshPage', component: RefreshPage },
    { path: '/datamap', name: 'DataMap', component: DataMap },
    { path: '/default', name: 'Default', component: Default },
  ]
});
