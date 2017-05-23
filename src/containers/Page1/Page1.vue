<style lang="scss" scoped>
.page1Css {
  .title {
    font-size: 20px;
    color: red;
    text-align: center;
  }
  .btn {
    padding: 5px 10px;
    text-align: center;
  }
}
</style>

<template>
  <div class="page1Css">
    <div class="title">
      Page1
    </div>
    <br/> aaadsf
    <div>
     aaadsfas fdas defaultasdf
    </div>
    <div>
     aaadsfas fdas defaultasdf
    </div>
    <div>
     aaadsfas fdas defaultasdf
    </div>
    <div>
     aaadsfas fdas defaultasdf
    </div>
    <div>
     aaadsfas fdas defaultasdf
    </div>
    <br/>
    <hr />
  
    <div class="btn" @click="aaa">button</div>
  </div>
</template>

<script>
import { Utility } from '@/components/core';
export default {
  name: 'hello',
  data() {
    return {
      msg: '这是一个页面啦'
    };
  },
  methods: {
    aaa: function () {
      // console.log('-------');
      // console.log(Utility);
      Utility.$emit(Utility.constItem.UrlItem.GoBack, { a: '111' });
    },
  }
};
</script>
