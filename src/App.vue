<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 8px;
}

.__common {
  position: fixed;
  left: 0px;
  right: 0px; // height: 100%;
  // width: 100%;
  padding: 0px 8px;
}

.fade-enter-active {
  @extend .__common;
  transition: all .6s;
  transform: translate3d(0, 0, 0);
}

.fade-enter {
  @extend .__common;
  transform: translate3d(-100%, 0, 0);
}

.fade-leave-active {
  @extend .__common;
  transition: all .6s;
  transform: translate3d(100%, 0, 0);
}


.fade-leave {
  @extend .__common;
  transform: translate3d(0, 0, 0);
}
</style>

<template>
  <div id="app">
    <xtn-menu></xtn-menu>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import Utility from './Common/Utility';
import Vue from 'vue';
import { Menu, Utility } from './components/core';

export default {
  name: 'app',
  data() {
    const _Content = {};
    return _Content;
  },
  created() {
    Utility.setContent(Utility.constItem.Event, new Vue());
    Utility.setContent(Utility.constItem.Context, this);
    Utility.$on(Utility.constItem.UrlItem.GoBack, () => {
      alert('bbbbbbb');
    });
  },
  beforeCreate() {

  },
  components: {
    'xtn-menu': Menu
  }
};
</script>

