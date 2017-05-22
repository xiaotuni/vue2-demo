<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <xtn-menu></xtn-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Utility from './Common/Utility';
import Vue from 'vue';
import Menu from './components/Menu.vue';

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

