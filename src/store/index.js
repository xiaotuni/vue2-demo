import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
import Common from './storeCommon';

export default new Vuex.Store({
  modules: { Common },
  strict: debug,
  plugins: [] // debug ? [createLogger()] : []
});
