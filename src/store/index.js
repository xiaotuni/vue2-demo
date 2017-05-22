import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
import * as actions from './actions';
import * as getters from './getters';

export default new Vuex.Store({
  actions,
  getters,
  modules: {},
  strict: debug,
  plugins: [] // debug ? [createLogger()] : []
});
