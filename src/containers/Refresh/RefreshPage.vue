<style lang="scss" scoped>
.refreshPageCss {

  .group {
    >div {
      margin: 5px;
      padding: 5px;
      border: 1px solid #f5f5f5;
      text-align: center;
    }
  }
}
</style>

<template>
  <div class="refreshPageCss">
    <xtn-menu></xtn-menu>
    <xtn-refresh>
      <div class="group">
        <div>aaaaaaaa</div>
        <div>aaaaaaaa</div>
        <div>aaaaaaaa</div>
        <div>aaaaaaaa</div>
        <div>aaaaaaaa</div>
        <div>aaaaaaaa</div>
      </div>
    </xtn-refresh>
  </div>
</template>

<script>
import { Utility, Menu, ApiInfo, Refresh } from '@/components/core';
export default {
  name: 'hello',
  data() {
    return {
      msg: '这是一个页面啦'
    };
  },
  methods: {

    CallStoreMethod(times) {

    },
    ModifyMethdName(name) {

    },
    CallMethodName(methodName) {

    },
    CallAPI() {
      console.log(ApiInfo);
      Utility.$toPage();
    },
    TextCallAPI1() {

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
    'xtn-menu': Menu,
    'xtn-refresh': Refresh,
  }
};
</script>
