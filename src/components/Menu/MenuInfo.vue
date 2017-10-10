<style lang="scss" scoped>
.menuInfoCss {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  font-size: 14px;

  >div {
    margin: 5px 0px;
    >div {
      padding: 5px;
      background: #cd5e5e;
      &:hover {
        border: 1px solid #4f4f91;
        padding: 4px;
        background: #4f4f91;
      }
    }
  }
}
</style>
<template>
  <div class="menuInfoCss">
    <div v-for="(item,index) in List" v-bind:key="index">
      <div v-on:click="onClickSelectItem(item)">
        <div>
          {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Utility } from '@/components/core';
export default {
  name: 'MenuInfo',
  data() {
    const __Content = { List: [] };
    return __Content;
  },
  mounted() {
    const data = [
      { id: 1, title: '人口分析', },
      { id: 2, title: '土地市场分析', },
      { id: 3, title: '市场大数据', },
      { id: 4, title: '选址大数据', },
    ];
    this.List = data;
  },
  methods: {
    GoToPage(item) {
      Utility.$toPage(item.Url);
    },
    onClickSelectItem(item) {
      console.log(item);
    }
  }
};
</script>
