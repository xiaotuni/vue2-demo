<style lang="scss" >
.taskCss {
  padding: 0px;

  font-size: 18px;
}
</style>
<template>
  <div class="taskCss">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    };
  },
  mounted() {
  },
  methods: {
  },
  computed: {
  }
};

</script>