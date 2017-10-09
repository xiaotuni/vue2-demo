<style lang="scss">
.cityDataCss {
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
  <div class="cityDataCss">
    <div class="title">城市发展指标</div>
    <div class="data">
      <div class="left">图标</div>
      <div class="right">
        <md-name-value :Collection="List"></md-name-value>
      </div>
    </div>
  </div>
</template>
<script>
import { Utility, NameValue } from '@/components/core';
export default {
  name: 'CityData',
  data() {
    const __Content = { List: [] };
    return __Content;
  },
  mounted() {
    console.log('--------city data----------');
    console.log('people data components----------');
    const data = [
      { id: 1, title: '三产占比', value: '10.53%' },
      { id: 2, title: '高服占比', value: '10.53%' },
      { id: 3, title: '公交密度', value: '10.53%' },
      { id: 4, title: '地铁密度', value: '10.53%' },
      { id: 5, title: '通勤半经', value: '10.53%' },
      { id: 6, title: '医疗指数', value: '10.53%' },
      { id: 7, title: '公园指数', value: '10.53%' },
      { id: 8, title: '教育指数', value: '10.53%' },
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
