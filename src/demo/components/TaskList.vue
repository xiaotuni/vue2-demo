<style lang="scss" >
.taskList {
  padding: 0px;
  .list {
    font-size: 16px;
    margin: 5px 0px;
    color: blue;
  }
  .task {
    color: #999;
  }
}
</style>
<template>
  <div class="taskList">
    <slot></slot>
    <div class="list">任务列表</div>
    <div>
      <task class="task" v-for="(item,index) in tasks" :key="index">{{item.name}}</task>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue';
export default {
  data() {
    return {
      tasks: [
        { name: 'go to the store', complete: true },
        { name: 'go to the shopping', complete: false },
        { name: 'go to the email', complete: false },
        { name: 'go to the farm', complete: true },
        { name: 'go to work', complete: false }
      ]
    };
  },
  mounted() {
    console.log('task list components...');
    console.log(this);
  },
  methods: {
  },
  computed: {
  },
  components: {
    'task': Task
  }
};

</script>