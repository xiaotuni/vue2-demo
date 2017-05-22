<style lang="scss">
.pageList {
  display: flex;
  align-items: center;

  .page {
    margin-right: 5px;
    >div {
      border: 1px solid #f5f5f5;
      padding: 5px 10px;
    }
  }
}
</style>
<template>
  <div class="pageList">
    <div class="page" v-for="(item,index) in List">
      <div @click="GoToPage(item)">
        {{(index+1)+ ':' + item.Title}}
      </div>
    </div>
  </div>
</template>
<script>
import Utility from '../Common/Utility';
export default {
  data() {
    const __Content = { List: [] };
    return __Content;
  },
  mounted() {
    const { UrlTitle } = Utility.constItem;
    Object.keys(UrlTitle).forEach(key => {
      // console.log(key);
      this.List.push(Object.assign({}, { Url: key }, UrlTitle[key]));
    });
    // this.List = Object.values(UrlTitle);
  },
  methods: {
    GoToPage(item) {
      // console.log(item);
      Utility.toPage(item.Url);
    }
  }
};
</script>
