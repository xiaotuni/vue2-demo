<style lang="scss" scoped>
.multiselectMobikeCss {
  position: relative;
  display: flex;
  >div {
    flex: 1;
  }
}
</style>
<template>
  <div class="multiselectMobikeCss">
    <div class="left">
      <md-multiselect Title="摩拜单车" v-bind:IsAddTitleChecked="true" v-bind:IsMultiselect="true" :onSelectItem="onSelectItem" :DataSource="DataSource"/>
    </div>
    <div class="right">
      图表位置
    </div>

  </div>
</template>
<script>
import { Multiselect } from '@/components/InsideComponent/core';
import { Utility } from '@/components/core';
export default {
  name: 'MultiselectMobike',
  props: {
    DataSource: { type: Array, default: [] },
    onSelectItem: { type: Function, }
  },
  data() {
    const __Content = {};
    return __Content;
  },
  created() {
  },
  updated() {
  },
  computed() {
  },
  mounted() {
  },
  methods: {
    GoToPage(item) {
      Utility.$toPage(item.Url);
    },

  },
  components: {
    'md-multiselect': Multiselect,
  }
};
</script>
