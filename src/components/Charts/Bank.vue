<style lang="scss" scoped>
.bankChartCss {
  font-size: 14px;
  position: relative;
  .title {
    padding: 5px;
    background: #799dbf;
  }
}
</style>
<template>
  <div class="bankChartCss">
    <div class="title">
      <md-checkbox Title="银行" v-bind:IsChecked="IsDefaultValue" :onClick="onClickCheckbox" />
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
  name: 'BankChart',
  props: {
    DataSource: { type: Array, default: [] },
    onSelectItem: { type: Function, }
  },
  data() {
    const __Content = { IsDefaultValue: true };
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
