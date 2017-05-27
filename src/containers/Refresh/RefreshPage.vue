<style lang="scss" scoped>
.refreshPageCss {

  .group {
    // margin: 5px;
    .rowInfo {
      padding: 5px 0px;
      margin-bottom: 5px;
      border: 1px solid #f5f5f5;
      text-align: center;
      display: flex;
      align-items: center;
      overflow: hidden;
      >div {
        border-left: 1px solid #f5f5f5;
      }
      >div:first-child {
        border-left: none;
      }
      .number {
        padding-right: 5px;
      }
      .guid {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        flex: 1;
      }
      .time {
        padding-left: 5px;
        white-space: nowrap;
      }
    }
  }
}
</style>

<template>
  <div class="refreshPageCss">
    <xtn-menu></xtn-menu>
    <xtn-refresh :OnNextData="NextData" :NextDataIsComplete="ThisNextDataIsComplete" :Percentage="10" :OnRefresh="RefreshData" :RefreshDataIsComplete="ThisRefreshDataIsComplete">
      <div class="group">
        <div class="rowInfo" v-for="(item,index) in DataList">
          <div class="number">{{item.Id+1}}</div>
          <div class="guid">{{item.Guid}}</div>
          <div class="time">{{item.DateTime|ConvertDateTime}}</div>
        </div>
      </div>
    </xtn-refresh>
  </div>
</template>

<script>
import { Utility, Menu, ApiInfo, Refresh } from '@/components/core';
export default {
  name: 'hello',
  data() {
    return {
      msg: '这是一个页面啦',
      ThisNextDataIsComplete: true,
      ThisRefreshDataIsComplete: true,
      DataList: []
    };
  },
  methods: {
    __InitData(__P) {
      const __List = [];
      __List.push({ StateName: 'OrganizationInfo', Api: ApiInfo.Common.Organization, Params: __P, Data: __P, Method: 'get' });
      const __self = this;
      this.ThisRefreshDataIsComplete = false;
      this.ThisNextDataIsComplete = false;
      this.$store.dispatch('ExecuteCallAPI', { ApiList: __List }).then((result) => {
        const { OrganizationInfo } = __self.$store.state.Common;
        __self.DataList = OrganizationInfo.List;
        __self.ThisRefreshDataIsComplete = true;
        __self.ThisNextDataIsComplete = true;
      });
    },
    NextData(times) {
      console.log('获取下一页面数据');
      const { OrganizationInfo } = this.$store.state.Common;
      const { Condition } = OrganizationInfo;
      if (!Condition) {
        return;
      }
      this.__InitData(Condition);
    },
    RefreshData(name) {
      console.log('刷新当前页面数据');
      const __P = { parentId: 10000000, pageIndex: 0, pageSize: 10 };
      this.__InitData(__P);
    },
  },
  filters: {
    ConvertDateTime(value) {
      return Utility.$convertToDateByTimestamp(value, 'yyyy-MM-dd hh:mm:ss');
    },
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated: function () {
    console.log('实例更新啦');
  },
  created() {
    console.log('获取数据');
    this.RefreshData();
  },
  mounted() {
  },
  computed: {
    __GetTimes() {
      return this.$store.state.Common.times;
    },
    Common() {
      console.log('--------Common----------');
      return this.$store.state.Common;
    },
    Organizations: function () {
      console.log('--------Organizations----------');
      const { OrganizationInfo } = this.$store.state.Common;
      const { List } = OrganizationInfo || {};
      return List;
    }
  },
  components: {
    'xtn-menu': Menu,
    'xtn-refresh': Refresh,
  }
};
</script>
