<style lang="scss" scoped>
.page1Css {
  .title {
    font-size: 20px;
    color: red;
    text-align: center;
  }
}
</style>

<template>
  <div class="page1Css">
    <div class="title">
      Page1
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: '这是一个页面啦'
    };
  }
};
</script>
