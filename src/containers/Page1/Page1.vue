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
    .btn {
      padding: 5px 10px;
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      margin-right: 5px;
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
      <div class="btn" @click="ModifyMethdName('ccccccc')">cc</div>
  
    </div>
  </div>
</template>

<script>
import { Utility, Menu } from '@/components/core';
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
      this.$store.dispatch('CommonMethod', {
        methodName: name, obj: this, callBack: [aa], current: new Date().getTime()
      });
    },
  },
  updated: function () {
    console.log('实例更新啦');
  },
  computed: {
    // console.log('page1 computed ..2.');
    // console.log(this.$store.state.Common.times);
    __GetTimes() {
      console.log('page1 computed ..2.');
      console.log(this.$store.state.Common.times);
      return this.$store.state.Common.times;
    },
  },
  components: {
    'xtn-menu': Menu
  }
};
</script>
