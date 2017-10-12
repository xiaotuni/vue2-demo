<style lang="scss" scoped>
.checkboxCss {
  position: relative;
}
</style>
<template>
  <div class="checkboxCss" v-on:click="onClickInput($event)">
    <label for="">
      <input type="checkbox" v-model="IsChecked" v-on:click="onClickInput($event)">{{Title}}
    </label>
  </div>
</template>
<script>
export default {
  name: 'Checkbox',
  props: {
    Title: { type: String, default() { return '标题'; } },
    IsChecked: { type: String, default: false },
    onClick: { type: Function, }
  },
  data() {
    const __Content = {};
    return __Content;
  },
  created() {
  },
  updated() {
  },
  computed() {
  },
  mounted() {
  },
  methods: {
    onClickInput(event) {
      const { onClick, IsChecked } = this.$props;
      if (onClick) {
        onClick(!IsChecked, event);
      }
    },
  }
};
</script>
