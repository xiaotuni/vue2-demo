<style lang="scss">
.peopleDataCss {
  border: 1px solid #a0a0a0;
  height: 100%;
  overflow: auto;
  .title {
    width: 100%;
    position: relative;
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
    <div class="title">
      <md-title-info :name="TitleDesc"></md-title-info>
    </div>
    <div class="data">
      <div class="left">图标</div>
      <div class="right">
        <md-name-value :collection="DataSource"></md-name-value>
      </div>
    </div>
  </div>
</template>
<script>
import { NameValue, TitleInfo } from '@/components/InsideComponent/core';
import { Utility } from '@/components/core';
export default {
  name: 'PeopleData',
  props: {
    DataSource: {
      type: Array,
      default: function() {
        return [];
      }
    },
    TitleDesc: {
      type: String, default() {
        return '人口数据指标';
      }
    }
  },
  data() {
    const __Content = { List: [] };
    return __Content;
  },
  mounted() {

  },
  methods: {
    GoToPage(item) {
      Utility.$toPage(item.Url);
    }
  },
  components: {
    'md-name-value': NameValue,
    'md-title-info': TitleInfo,
  }
};
</script>
