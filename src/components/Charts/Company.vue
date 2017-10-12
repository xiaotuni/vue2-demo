<style lang="scss" scoped>
.companyChartCss {
  font-size: 14px;
  position: relative;
  .title {
    padding: 5px;
    background: #799dbf;
  }
}
</style>
<template>
  <div class="companyChartCss">
    <div class="title">
      <md-checkbox Title="公司" v-bind:IsChecked="IsDefaultValue" :onClick="onClickCheckbox" />
    </div>
    <div class="chart">
      图标位置
    </div>
  </div>
</template>
<script>
import { Checkbox } from '@/components/InsideComponent/core';
import { Utility } from '@/components/core';
export default {
  name: 'CompanyChart',
  props: {
    DataSource: { type: Array, default: [] },
    onSelectItem: { type: Function, }
  },
  data() {
    const __Content = { IsDefaultValue: false };
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
    onClickCheckbox(IsChecked, event) {
      this.IsDefaultValue = IsChecked;
    },
  },
  components: {
    'md-checkbox': Checkbox,
  }
};
</script>
