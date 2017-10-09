<style lang="scss">
.appCss {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // padding: 8px;

  .__common {
    position: fixed;
    left: 0px;
    right: 0px;
    padding: 0px 8px;
  }
  /*-------------------page go back------------------*/
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
  mounted() {
    const __self = this;
    const { HttpStatus, OnGoBack } = Utility.constItem.Events;
    Utility.$on(OnGoBack, (args) => {
      __self.TranName = 'goback';
      __self.IsGoBack = true;
      __self.$router.back();
      setTimeout(() => {
        __self.TranName = 'nextPage';
      }, 600);
    });

    const __ProcessHttpStatus = (args) => {
      const { code, body } = args || {};
      const { msg } = body;
      switch (code) {
        case 400:              // bad request
          break;
        case 401:              // Unauthorized
          break;
        case 403:
          break;
        case 404:
          break;
        case 500:
          break;
        case 501:
          break;
        case 502:
          break;
        default:
          break;
      }
      console.log(code, msg);
    };
    Object.values(HttpStatus).forEach((eventName) => {
      Utility.$on(eventName, __ProcessHttpStatus);
    });

  },
  created() {
    Utility.setContent(Utility.constItem.Event, new Vue());
    Utility.setContent(Utility.constItem.Context, this);
    const __self = this;
    const __KeyRouter = Utility.constItem.SaveRouterKey;
    Utility.removeContent(__KeyRouter, true);
    const __UrlTitle = Utility.constItem.UrlTitle;
    this.$router.beforeEach((to, from, next) => {
      if (__UrlTitle[to.path]) {
        window.document.title = __UrlTitle[to.path].Title || 'my-project';
      }
      const { key } = history.state || {};
      if (key) {
        const __RouterInfo = Utility.getContent(__KeyRouter) || { __Router: {} };
        const { __Router } = __RouterInfo;
        const __StateKey = history.state.key;
        const __KeyIndex = Object.keys(__Router).length;
        if (!__Router[__StateKey]) {
          __Router[__StateKey] = { key: __StateKey, index: __KeyIndex };
          __RouterInfo.__CurrentKey = __StateKey;
          __RouterInfo.__CurrentIndex = __KeyIndex;
          Utility.setContent(__KeyRouter, __RouterInfo, true);
        } else {
          const aa = __Router[__StateKey];
          if (aa.index > __RouterInfo.__CurrentIndex) {
            // console.log('前进');
          } else {
            // console.log('后退');
            __self.TranName = 'goback';
            setTimeout(() => {
              __self.TranName = 'nextPage';
            }, 600);
          }
          __RouterInfo.__CurrentIndex = aa.index;
        }
      }
      next();
    });
  },
  beforeCreate() {

  },
  components: {
    'xtn-menu': Menu
  }
};
</script>

