<style lang="scss" scoped>
.multiselectPOICss {
  position: relative;
  display: flex;
  >div {
    flex: 1;
  }
}
</style>
<template>
  <div class="multiselectPOICss">
    <div class="left">
      <md-multiselect Title="POI数据类型" v-bind:IsAddTitleChecked="true" v-bind:IsMultiselect="true" :onSelectItem="onSelectItem" :DataSource="DataSource" />
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
  name: 'MultiselectPOI',
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
