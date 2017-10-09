<style lang="scss">
.newHomeMarketCss {
  border: 1px solid #a0a0a0;
  height: 100%;
  overflow: auto;
  .title {
    padding: 5px 10px;
    font-size: 18px;
  }
  .data {
    display: flex;
    .left {
      flex: 1;
    }
    .right {
      flex: 1;
    }
  }
}
</style>
<template>
  <div class="newHomeMarketCss">
    <div class="title">新房市场指标</div>
    <div class="data">
      <div class="left">
        <md-name-value :Collection="List"></md-name-value>
      </div>
      <div class="right">
        图标
      </div>
    </div>
  </div>
</template>
<script>
import { Utility, NameValue } from '@/components/core';
export default {
  name: 'NewHomeMarket',
  data() {
    const __Content = { List: [] };
    return __Content;
  },
  mounted() {
    console.log('people data components----------');
    const data = [
      { id: 1, title: '最高租金', value: '10.53%' },
      { id: 2, title: '中位租金', value: '10.53%' },
      { id: 3, title: '平均租金', value: '10.53%' },
      { id: 4, title: '热租户型', value: '10.53%' },
      { id: 5, title: '滞租率', value: '10.53%' },
      { id: 6, title: '最高租增', value: '10.53%' },
      { id: 7, title: '中位租增', value: '10.53%' },
      { id: 8, title: '平均租增', value: '10.53%' },
    ];
    this.List = data;
  },
  methods: {
    GoToPage(item) {
      Utility.$toPage(item.Url);
    }
  },
  components: {
    'md-name-value': NameValue
  }
};
</script>
