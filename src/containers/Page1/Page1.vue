<style lang="scss" scoped>
.page1Css {
  .title {
    font-size: 20px;
    color: red;
    text-align: center;
  }
  .btn {
    padding: 5px 10px;
    text-align: center;
  }

  .store {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .btn {
      padding: 5px 10px;
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      margin-right: 5px;
      margin-top: 5px;
    }
  }
}
</style>

<template>
  <div class="page1Css">
    <xtn-menu></xtn-menu>
    <div class="title">
      Page1
    </div>
    <br/>
    <div class="btn" @click="aaa">后退</div>
    <hr />
    <div class="store">
  
      <div class="btn" @click="CallStoreMethod(1)">添加(+)</div>
      <div class="btn">{{__GetTimes}}</div>
      <div class="btn" @click="CallStoreMethod(-1)">减少(-)</div>
      <div class="btn" @click="ModifyMethdName('aaaaaaa')">aa</div>
      <div class="btn" @click="ModifyMethdName('bbbbbbb')">bb</div>
      <div class="btn" @click="CallMethodName('CallAPIByClient1')">CallAPIByClient1</div>
      <div class="btn" @click="CallMethodName('QueryList')">Call Query List Api</div>
      <div class="btn" @click="CallAPI()">Call Api</div>
      <div class="btn" @click="TextCallAPI1">TextCallAPI1</div>
  
    </div>
  </div>
</template>

<script>
import { Utility, Menu, ApiInfo } from '@/components/core';
export default {
  name: 'hello',
  data() {
    return {
      msg: '这是一个页面啦'
    };
  },
  methods: {
    aaa: function () {
      Utility.$goBack(2);
    },
    CallStoreMethod(times) {
      console.log('CallStoreMethod');
      this.$store.dispatch('__GetTestActions', { times: times });
    },
    ModifyMethdName(name) {
      const aa = (pp) => {
        console.log(pp);
      };
      const __self = this;
      this.$store.dispatch('CommonMethod', {
        methodName: name, obj: this, callBack: [aa], current: new Date().getTime()
      }).then((result) => {
        console.log(__self.$store.state.Common.Temp001);
        console.log(result);
      });
    },
    CallMethodName(methodName) {
      this.$store.dispatch(methodName, { current: new Date().getTime() }).then((list) => {
        console.log('返回的值-------');
        console.log(list);
      }).catch(ex => console.log(ex));
    },
    CallAPI() {
      const __self = this;
      const obj = {
        Api: ApiInfo.Common.Organization, StateName: 'OrganizationList',
        // params: { parentId: 10000000, CurrentIndex: 0, showTree: false },
        // data: { parentId: 10000000, CurrentIndex: 0, showTree: false },
      };
      this.$store.dispatch('QueryApi', obj).then((result) => {
        console.log(__self.$store.state.Common.OrganizationList);
        console.log('call api......');
        console.log(result);
        console.log('QueryApi complete...');
      });
    },
    TextCallAPI1() {
      console.log('TextCallAPI1');
      const __List = [];
      const __P = { parentId: 10000000, pageIndex: 0, pageSize: 10 };
      const __P1 = { parentId: 10000000, pageIndex: 1, pageSize: 10 };
      const __P2 = { parentId: 10000000, pageIndex: 2, pageSize: 10 };
      __List.push({ StateName: 'TextCallAPI1', Api: ApiInfo.Common.Organization, Params: __P, Data: __P, Method: 'get' });
      __List.push({ StateName: 'TextCallAPI2', Api: ApiInfo.Common.Organization, Params: __P1, Data: __P1, Method: 'get' });
      __List.push({ StateName: 'TextCallAPI3', Api: ApiInfo.Common.Organization, Params: __P2, Data: __P2, Method: 'get' });
      const __self = this;
      this.$store.dispatch('ExecuteCallAPI', { ApiList: __List }).then((result) => {
        const { TextCallAPI1, TextCallAPI2, TextCallAPI3 } = __self.$store.state.Common;
        console.log(TextCallAPI1, TextCallAPI2, TextCallAPI3);
        console.log(result);
      });
    },
  },
  updated: function () {
    console.log('实例更新啦');
  },
  computed: {
    __GetTimes() {
      return this.$store.state.Common.times;
    },
  },
  components: {
    'xtn-menu': Menu
  }
};
</script>
