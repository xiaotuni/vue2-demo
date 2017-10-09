<style lang="scss">
.monitorDataCss {
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
  <div class="monitorDataCss">
    <div class="title">规划监测指标</div>
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
  name: 'MonitorData',
  data() {
    const __Content = { List: [] };
    return __Content;
  },
  mounted() {
    const data = [
      { id: 1, title: '人口增长', value: '10.53%' },
      { id: 2, title: '户均人口', value: '10.53%' },
      { id: 3, title: '换手率', value: '10.53%' },
      { id: 4, title: '抚养比', value: '10.53%' },
      { id: 5, title: '本地就业', value: '10.53%' },
      { id: 6, title: '轨交供需', value: '10.53%' },
      { id: 7, title: '社区多样', value: '10.53%' },
      { id: 8, title: '教育指数', value: '10.53%' },
    ];
    this.List = data;
    console.log('people data components----------');
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
