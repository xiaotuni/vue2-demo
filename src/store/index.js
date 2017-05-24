import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import ApiClient from '@/helpers/ApiClient';
const __API = new ApiClient(null);
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
import Common from './storeCommon';

export default new Vuex.Store({
  getters,
  __API,
  modules: { Common },
  strict: debug,
  plugins: []  // debug ? [createLogger()] : []
});
