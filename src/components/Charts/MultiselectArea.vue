<style lang="scss" scoped>
.multiselectAreaCss {
  position: relative;
  display: flex;
  >div {
    flex: 1;
  }
}
</style>
<template>
  <div class="multiselectAreaCss">
    <div class="left">
      <md-multiselect Title="地区" v-bind:IsAddTitleChecked="true" v-bind:IsMultiselect="true" :onSelectItem="onSelectItem" :DataSource="DataSource"></md-multiselect>
    </div>
    <div class="right">
      图表
    </div>

  </div>
</template>
<script>
import { Multiselect } from '@/components/InsideComponent/core';
import { Utility } from '@/components/core';
export default {
  name: 'MultiselectArea',
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
