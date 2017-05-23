// import * as types from './mutation-types';
const __Store = 'XTN_STORE_';
const __GetTestAction = __Store + '__GetTestAction';
let __CommName = __Store;
const __Query_Collection = __Store + '_Query_Collection';
const __Query_First = __Store + '__Query_First';
export default {
  state: { times: 0 },
  getters: {},
  actions: {
    __GetTestActions(action, params) {
      const { commit } = action;
      commit(__GetTestAction, params);
    },
    CommonMethod(action, params) {
      const { commit } = action;
      const { methodName } = params;
      __CommName = __Store + methodName;
      const _mutations = params.obj.$store._mutations;
      _mutations[methodName] = params.callBack;
      commit(methodName, params);
    },
    QueryList(action, params) {
      const { commit } = action;

      return commit(__Query_Collection, params);
    },
    QueryFirst(action, params) {
      const { commit } = action;
      return commit(__Query_First, params);
    }
  },
  mutations: {
    [__Query_Collection](state, params) {

    },
    [__Query_First](state, params) {

    },
    [__CommName](state, params) {
      console.log(params);
    },
    [__GetTestAction](state, params) {
      state.times += params.times;
    },
  }
};
