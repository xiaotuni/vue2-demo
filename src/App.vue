<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 8px;
}

.appCss {

  .__common {
    position: fixed;
    left: 0px;
    right: 0px;
    padding: 0px 8px;
  }

  .goback-enter-active {
    @extend .__common;
    transition: all .6s;
    transform: translate3d(0, 0, 0);
  }

  .goback-enter {
    @extend .__common;
    transform: translate3d(-100%, 0, 0);
  }

  .goback-leave-active {
    @extend .__common;
    transition: all .6s;
    transform: translate3d(100%, 0, 0);
  }

  .goback-leave {
    @extend .__common;
    transform: translate3d(0, 0, 0);
  }
  /*----------------------next page------------------------*/
  .nextPage-enter-active {
    @extend .__common;
    transition: all .6s;
    transform: translate3d(0, 0, 0);
  }

  .nextPage-enter {
    @extend .__common;
    transform: translate3d(100%, 0, 0);
  }

  .nextPage-leave-active {
    @extend .__common;
    transition: all .6s;
    transform: translate3d(-100%, 0, 0);
  }

  .nextPage-leave {
    @extend .__common;
    transform: translate3d(0, 0, 0);
  }
}
</style>

<template>
  <div id="app" class="appCss">
    <!--<xtn-menu></xtn-menu>-->
    <transition :name="TranName">
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
    const _Content = {
      IsGoBack: false,
      TranName: 'nextPage'
    };
    return _Content;
  },
  created() {
    Utility.setContent(Utility.constItem.Event, new Vue());
    Utility.setContent(Utility.constItem.Context, this);
    const __self = this;
    Utility.$on(Utility.constItem.Events.OnGoBack, (args) => {
      __self.TranName = 'goback';
      __self.IsGoBack = true;
      __self.$router.back();
      setTimeout(() => {
        __self.TranName = 'nextPage';
      }, 600);
    });
  },
  beforeCreate() {

  },
  components: {
    'xtn-menu': Menu
  }
};
</script>

