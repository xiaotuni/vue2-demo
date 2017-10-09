<style lang="scss">
.secondHandHousingMarketCss {
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
  <div class="secondHandHousingMarketCss">
    <div class="title">二手房市场指标</div>
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
  name: 'SecondHandHousingMarket',
  data() {
    const __Content = { List: [] };
    return __Content;
  },
  mounted() {
    console.log('people data components----------');
    const data = [
      { id: 1, title: '套数规模', value: '10.53%' },
      { id: 2, title: '最高单价', value: '10.53%' },
      { id: 3, title: '中位单价', value: '10.53%' },
      { id: 4, title: '平均单价', value: '10.53%' },
      { id: 5, title: '单价高数', value: '10.53%' },
      { id: 6, title: '最高价增', value: '10.53%' },
      { id: 7, title: '中位价增', value: '10.53%' },
      { id: 8, title: '平均价增', value: '10.53%' },
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
