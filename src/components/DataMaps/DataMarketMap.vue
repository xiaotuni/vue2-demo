<style lang="scss">
.dataMarketMapCss {
  .title {
    padding: 10px;
    font-size: 16px;
    display: flex;
    >div {
      flex: 1;
      text-align: center;
    }
  }
}
</style>
<template>
  <div class="dataMarketMapCss">
    <div class="title">
      <div>夜间人口：102030人</div>
      <div>日间人口：8392923人</div>
    </div>
    <div>
      地图位置
    </div>
  </div>
</template>
<script>
import { Utility } from '@/components/core';
export default {
  name: 'DataMarketMap',
  data() {
    const __Content = { List: [] };
    return __Content;
  },
  mounted() {
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
    // 'md-name-value': NameValue
  }
};
</script>
