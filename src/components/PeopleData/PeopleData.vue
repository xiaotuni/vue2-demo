<style lang="scss">
.peopleDataCss {
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
  <div class="peopleDataCss">
    <div class="title">人中数据指标</div>
    <div class="data">
      <div class="left">图标</div>
      <div class="right">
        <md-name-value :Collection="Collection"></md-name-value>
      </div>
    </div>
  </div>
</template>
<script>
import { Utility, NameValue } from '@/components/core';
export default {
  name: 'PeopleData',
  data() {
    const __Content = { List: [], Collection: [] };
    return __Content;
  },
  mounted() {
    console.log('people data components----------');

    const data = [
      { id: 1, title: '日夜潮汐', value: '10.53%' },
      { id: 2, title: '高学历比', value: '10.53%' },
      { id: 3, title: '劳动力比', value: '10.53%' },
      { id: 4, title: '老龄人比', value: '10.53%' },
      { id: 5, title: '学龄人比', value: '10.53%' },
      { id: 6, title: '户籍人比', value: '10.53%' },
      { id: 7, title: '劳动趋势', value: '10.53%' },
      { id: 8, title: '老龄趋势', value: '10.53%' },
    ];
    this.Collection = data;
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
