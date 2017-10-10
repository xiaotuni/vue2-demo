<style lang="scss" scoped>
.titleInfoCss {
  >div {
    font-size: 16px;
    padding: 2px;
    /*IE 6 7 8*/
    background: -ms-linear-gradient(top, #fff, #0000ff);
    /* IE 10 */
    background: -moz-linear-gradient(top, #b8c4cb, #f6f6f8);
    /*火狐*/
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#b8c4cb), to(#f6f6f8));
    /*谷歌*/
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fff), to(#0000ff));
    /*Safari5.1 Chrome 10+*/
    background: -o-linear-gradient(right, #111111, #ddd7d7);
    /* Safari 4-5, Chrome 1-9*/
    background: -webkit-linear-gradient(right, #111111, #ddd7d7);
    /*Opera 11.10+*/
    FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=0, startColorStr=#b8c4cb, endColorStr=red);
  }
}
</style>
<template>
  <div class="titleInfoCss">
    <div>{{name}}</div>
  </div>
</template>
<script>
import { Utility } from '@/components/core';
export default {
  name: 'CityData',
  props: {
    name: {
      type: String,
      default: function() {
        return '默认标题';
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$props.name);
    console.log('------title info------------------');
  },
  methods: {
    GoToPage(item) {
      Utility.$toPage(item.Url);
    }
  }
};
</script>
