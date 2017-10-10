<style lang="scss" scoped>
.multiselectCss {
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
  <div class="multiselectCss">
    <div v-for="(item,index) in List" v-bind:key="index">
      <div v-on:click="onClickSelectItem(item,index)">
        <label for="">
          <input type="checkbox" v-model="SelectItem[index]"/> {{item.title}}
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import { Utility } from '@/components/core';
export default {
  name: 'Multiselect',
  props: {
    IsMultiselect: {
      type: Boolean, default() {
        return true;
      }
    },
    DataSource: {
      type: Array, default() {
        return [];
      }
    },
    onSelectItem: {
      type: Function,
    }
  },
  event: {

  },
  data() {
    const __Content = { List: [], SelectItem: {} };
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
    onClickSelectItem(item, index) {
      const { onSelectItem, IsMultiselect } = this.$props;
      if (!onSelectItem) {
        return;
      }
      if (!IsMultiselect) {
        onSelectItem(item);
        return;
      }
      if (!this.SelectItem[index]) {
        this.SelectItem[index] = item;
      } else {
        delete this.SelectItem[index];
      }
      onSelectItem(Object.values(this.SelectItem));
    }
  }
};
</script>
