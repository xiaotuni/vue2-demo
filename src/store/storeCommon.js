import Vue from 'vue';
const __Store = 'XTN_STORE_';
const __GetTestAction = __Store + '__GetTestAction';
let __CommName = __Store;
const __Query_Collection = __Store + '_Query_Collection';
const __Query_First = __Store + '__Query_First';
const __ExecuteFunction = __Store + '__ExecuteFunction';

const Load = __Store + '_Load';
const Fail = __Store + '_Fail';
const Complete = __Store + '_Complete';


// import Utility from '@/Common/Utility';
export default {
  state: { times: 0 },
  getters: {},
  actions: {
    __GetTestActions(action, params) {
      const { commit } = action;
      commit(__GetTestAction, params);
    },

    CallAPIByClient1(action, params) {
      // console.log('CallAPIByClient1');
      const { commit, getters } = action;
      const { client1 } = getters;
      commit(Load);
      // return client1.get(client1.API.Common.Organization, {
      //   params: { parentId: 10000000, CurrentIndex: 0, showTree: false },
      // });

      return client1.post(client1.API.Common.SaveUser, {
        params: { parentId: 10000000, CurrentIndex: 0, showTree: false },
        data: { parentId1: 10000000, CurrentIndex: 0, showTree: false },
      });
    },

    CommonMethod(action, params) {
      const { commit, getters } = action;
      const { client } = getters;
      // 单接口
      const __APIParams = { parentId: 10000000, CurrentIndex: 0, showTree: false };
      return client({
        commit, action: {
          StateName: 'Temp001',
          types: [Load, __Query_Collection, Fail],
          promise: (client) => client.get(client.API.Common.Organization, { params: __APIParams }),
          conditions: __APIParams,
        }
      });
    },
    QueryList(action, params) {
      // const { commit, getters, dispatch, state } = action;
      const { commit, getters } = action;
      const { client } = getters;
      const __APIParams = { parentId: 10000000, CurrentIndex: 0, showTree: false };
      const __APIParams1 = { parentId: 10000001, CurrentIndex: 0, showTree: false };
      const __APIParams2 = { parentId: 10000002, CurrentIndex: 0, showTree: false };

      /*
       * -------批量调用接口 方法1-------- 
      *********************/
      // const __APIList = [];
      // __APIList.push(client({ commit, action: { StateName: 'OrgInfoList', types: [Load, __Query_Collection, Fail], promise: (client) => client.post(client.API.Common.Organization, { params: __APIParams }), conditions: __APIParams, } }));
      // __APIList.push(client({ commit, action: { StateName: 'OrgInfoList1', types: [Load, __Query_Collection, Fail], promise: (client) => client.get(client.API.Common.Organization, { params: __APIParams1 }), conditions: __APIParams, } }));
      // __APIList.push(client({ commit, action: { StateName: 'OrgInfoList2', types: [Load, __Query_Collection, Fail], promise: (client) => client.get(client.API.Common.Organization, { params: __APIParams2 }), conditions: __APIParams, } }));
      // return Promise.all(__APIList);

      // 批量调用接口方法2 这种更好。
      return client({
        commit,
        actions: {
          loading: Load,
          fail: Fail,
          complete: Complete,
          list: [
            { StateName: 'OrgInfoList', type: __Query_Collection, promise: (client) => client.post(client.API.Common.Organization, { params: __APIParams }), conditions: __APIParams },
            { StateName: 'OrgInfoList1', type: __Query_Collection, promise: (client) => client.get(client.API.Common.Organization, { params: __APIParams1 }), conditions: __APIParams },
            { StateName: 'OrgInfoList2', type: __Query_Collection, promise: (client) => client.post(client.API.Common.Organization, { params: __APIParams2 }), conditions: __APIParams },
          ]
        }
      });
    },
    QueryFirst(action, params) {
      const { commit } = action;
      return commit(__Query_First, params);
    },
    QueryApi(action, paramsInfo) {
      const { commit, getters } = action;
      const { client } = getters;
      const { Api, StateName, params, data } = paramsInfo;
      return client({
        commit, action: {
          StateName: StateName,
          types: [Load, __Query_Collection, Fail],
          promise: (client) => client.get(Api, { params: params, data }),
          conditions: params,
        }
      });
    },
    ExecuteCallAPI(action, paramInfo) {
      const { commit, getters } = action;
      const { client } = getters;
      const { ApiList } = paramInfo;
      const __List = { commit, actions: { list: [], loading: Load, fail: Fail, complete: Complete, } };
      ApiList.forEach((api) => {
        const { StateName, Api, Params, Data, Method } = api;
        __List.actions.list.push({
          StateName, type: __ExecuteFunction, promise: (client) => client[Method](Api, { params: Params, data: Data }),
          Condition: Params
        });
      });
      console.log('---------------ExecuteCallAPI------------');
      return client(__List);
    }
  },
  mutations: {
    [__ExecuteFunction](state, params) {
      const { StateName, result, Condition } = params;
      state.Result = result;
      if (StateName) {
        if (result && result.constructor.name === 'Array') {
          const { pageIndex, pageSize } = Condition;
          const _pIndex = Number(pageIndex) || 0;
          const _pSize = Number(pageSize) || 10;
          const _isExistsNextData = _pSize < result.length ? false : true;
          Condition.pageSize = _pSize;
          Condition.isExistsNextData = _isExistsNextData;
          Condition.pageIndex = _pIndex + 1;
          const { List } = state[StateName] || { List: [] };
          const __Result = {};
          __Result.Condition = Condition;
          if (Condition.pageIndex > 1) {
            __Result.List = List.concat(result);
          } else {
            __Result.List = result;
          }
          state[StateName] = __Result;
        } else {
          state[StateName] = result;
        }
      }
      state.__temp_Object = {};
      Vue.set(state.__temp_Object, '__CurrentTime', new Date().getTime());
    },
    [__Query_Collection](state, params) {
      const { StateName, result } = params;
      state.Result = result;
      if (StateName) {
        state[StateName] = result;
      }
      // console.log('__Query_Collection');
    },

    [__Query_First](state, params) {
      const { StateName, result } = params;
      state.Result = result;
      if (StateName) {
        state[StateName] = result;
      }
    },
    [__CommName](state, params) {
      // console.log(params);
    },
    [__GetTestAction](state, params) {
      state.times += params.times;
    },
    [Fail](state, params) {
      // console.log('fail.....');
    },
    [Load](state, params) {
      // console.log('loading....');
    },
    [Complete](state, params) {
      state.CompleteResultList = params.results;
      // console.log('Complete....');
    },
  }
};
