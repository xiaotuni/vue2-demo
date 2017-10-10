<style lang="scss" scoped>
.nameValueCss {
  .row {
    display: flex;
    padding: 2px;
    border-bottom: 1px solid #f0f0f0;
    white-space: nowrap;
    overflow: auto;

    .value {
      text-align: right;
      flex: 1;
    }
    .name {
      text-align: left;
      flex: 1;
    }
  }
}
</style>
<template>
  <div class="nameValueCss">
    <div class="row" v-for="(item,index) in collection" v-bind:key="index">
      <div class="name">{{item.title}}</div>
      <div class="value">{{item.value}}</div>
    </div>
  </div>
</template>
<script>
import { Utility } from '@/components/core';
export default {
  name: 'CityData',
  props: {
    collection: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  created() {
    console.log('name value created.........');
  },
  mounted() {
    console.log('------------------------');
  },
  methods: {
    GoToPage(item) {
      Utility.$toPage(item.Url);
    }
  }
};
</script>
