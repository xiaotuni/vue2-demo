<style lang="scss" scoped>
.multiselectCss {
  position: relative;
  font-size: 14px;
  .title {
    position: relative;
    padding: 5px;
    background: #799dbf;
  }
  .item {
    width: 100%;
    height: 100%;
    max-height: 180px;
    min-width: 130px;
    max-width: 180px;
    overflow-x: auto;

    >div {
      margin: 3px 0px;
      >div {
        padding: 5px;
        padding-left: 10px;
        background: #cd5e5e;
        &:hover {
          border: 1px solid #4f4f91;
          padding: 4px;
          padding-left: 9px;
          background: #4f4f91;
        }
      }
    }
    &.isDisabled {
      overflow: hidden;
      >div {
        >div {
          &:hover {
            border: none;
            padding: 5px;
            padding-left: 10px;
            background: #cd5e5e;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="multiselectCss">
    <div class="title">
      <label for="" v-if="IsAddTitleChecked" v-on:click="onLabelClick()">
        <div>
          <input type="checkbox" v-model="IsTitleChecked" v-on:click="onLabelClick()">{{Title}}：
        </div>
      </label>
      <span v-if="!IsAddTitleChecked">
        {{Title}}：
      </span>
    </div>

    <div class="item" :class="{'isDisabled': IsAddTitleChecked && IsTitleChecked===false}">
      <div v-for="(item,index) in List" v-bind:key="item.id">
        <div v-on:click="onClickSelectItem(item,index)">
          <label for="">
            <input type="checkbox" v-model="item.isChecked" v-on:click="onClickSelectItem(item,index)" /> {{item.title}}
          </label>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { Utility } from '@/components/core';
export default {
  name: 'Multiselect',
  props: {
    Title: { type: String, default() { return '标题'; } },
    IsAddTitleChecked: { type: Boolean, default: false },
    IsMultiselect: { type: Boolean, default: true },
    DataSource: { type: Array, default: [] },
    onSelectItem: { type: Function, }
  },
  data() {
    const __Content = { counter: 0, List: [], SelectItem: {}, IsTitleChecked: false };
    return __Content;
  },
  created() {
    this.List = this.$props.DataSource.slice(0, this.$props.DataSource.length);
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
    onLabelClick() {
      this.IsTitleChecked = !this.IsTitleChecked;
    },
    onClickSelectItem(item, index) {
      const { onSelectItem, IsMultiselect, DataSource, IsAddTitleChecked } = this.$props;
      if (!onSelectItem || !DataSource) {
        return;
      }
      if (!!IsAddTitleChecked && !this.IsTitleChecked) {
        return;
      }
      this.counter += 1;
      if (!IsMultiselect) {
        const __isChecked = item.isChecked;
        this.List.forEach((row) => {
          row.isChecked = false;
        });
        item.isChecked = !__isChecked;
        this.$set(this.List, index, item);
        onSelectItem(item.isChecked ? [item] : null);
        return;
      }

      item.isChecked = !item.isChecked;
      this.$set(this.List, index, item);
      const items = this.List.filter((row) => !!row.isChecked);
      onSelectItem(items);
    }
  }
};
</script>
