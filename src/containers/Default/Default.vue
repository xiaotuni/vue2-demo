<style lang="scss" scoped>
.defaultCss {
  font-size: 12px;
  background: #000;
  color: #fff;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  >div {
    cursor: default;
  }

  .dmLeft {
    border-right: 1px solid;
    height: 100%;
    overflow: hidden;
    margin-right: 5px;
  }

  .dmRight {
    .dmTop {
      display: flex;
      .item {
        border: 1px solid;
      }
    }
  }
}
</style>

<template>
  <div class="defaultCss">
    <div class="dmLeft">
      <md-menu-info Desc="菜单"></md-menu-info>
    </div>
    <div class="dmRight">
      <div class="dmTop">
        <div class="item">
          <div>
            城市：
            <select>
              <option>北京</option>
              <option>上海</option>
              <option>广州</option>
              <option>杭州</option>
            </select>
          </div>
          <div>
            地区：
            <md-multiselect :onSelectItem="onSelectAreaItem"></md-multiselect>
          </div>

        </div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="dm"></div>
    </div>
  </div>
</template>

<script>
import {
  MenuInfo, Utility, ApiInfo, Multiselect,
} from '@/components/core';
export default {
  name: 'Default',
  data() {
    return {
      msg: '这是一个页面啦',
      DataInfo: {}
    };
  },
  created() {
    const InitData = () => {
      this.DataInfo.CityData = [
        { id: 1, title: '三产占比', value: '10.53%' },
        { id: 2, title: '高服占比', value: '10.53%' },
        { id: 3, title: '公交密度', value: '10.53%' },
        { id: 4, title: '地铁密度', value: '10.53%' },
        { id: 5, title: '通勤半经', value: '10.53%' },
        { id: 6, title: '医疗指数', value: '10.53%' },
        { id: 7, title: '公园指数', value: '10.53%' },
        { id: 8, title: '教育指数', value: '10.53%' },
      ];

      this.DataInfo.PeopleData = [
        { id: 1, title: '日夜潮汐', value: '10.53%' },
        { id: 2, title: '高学历比', value: '10.53%' },
        { id: 3, title: '劳动力比', value: '10.53%' },
        { id: 4, title: '老龄人比', value: '10.53%' },
        { id: 5, title: '学龄人比', value: '10.53%' },
        { id: 6, title: '户籍人比', value: '10.53%' },
        { id: 7, title: '劳动趋势', value: '10.53%' },
        { id: 8, title: '老龄趋势', value: '10.53%' },
      ];

      this.DataInfo.MonitorData = [
        { id: 1, title: '人口增长', value: '10.53%' },
        { id: 2, title: '户均人口', value: '10.53%' },
        { id: 3, title: '换手率', value: '10.53%' },
        { id: 4, title: '抚养比', value: '10.53%' },
        { id: 5, title: '本地就业', value: '10.53%' },
        { id: 6, title: '轨交供需', value: '10.53%' },
        { id: 7, title: '社区多样', value: '10.53%' },
        { id: 8, title: '教育指数', value: '10.53%' },
      ];

      this.DataInfo.RentalMarket = [
        { id: 1, title: '最高租金', value: '10.53%' },
        { id: 2, title: '中位租金', value: '10.53%' },
        { id: 3, title: '平均租金', value: '10.53%' },
        { id: 4, title: '热租户型', value: '10.53%' },
        { id: 5, title: '滞租率', value: '10.53%' },
        { id: 6, title: '最高租增', value: '10.53%' },
        { id: 7, title: '中位租增', value: '10.53%' },
        { id: 8, title: '平均租增', value: '10.53%' },
      ];

      this.DataInfo.SecondHandHousingMarket = [
        { id: 1, title: '套数规模', value: '10.53%' },
        { id: 2, title: '最高单价', value: '10.53%' },
        { id: 3, title: '中位单价', value: '10.53%' },
        { id: 4, title: '平均单价', value: '10.53%' },
        { id: 5, title: '单价高数', value: '10.53%' },
        { id: 6, title: '最高价增', value: '10.53%' },
        { id: 7, title: '中位价增', value: '10.53%' },
        { id: 8, title: '平均价增', value: '10.53%' },
      ];

      this.DataInfo.NewHomeMarket = [
        { id: 1, title: '最高租金', value: '10.53%' },
        { id: 2, title: '中位租金', value: '10.53%' },
        { id: 3, title: '平均租金', value: '10.53%' },
        { id: 4, title: '热租户型', value: '10.53%' },
        { id: 5, title: '滞租率', value: '10.53%' },
        { id: 6, title: '最高租增', value: '10.53%' },
        { id: 7, title: '中位租增', value: '10.53%' },
        { id: 8, title: '平均租增', value: '10.53%' },
      ];
    };
    InitData();
  },
  methods: {
    TextCallAPI1() {
      console.log('TextCallAPI1');
      console.log(Utility, ApiInfo);
    },
    onSelectAreaItem(items) {
      console.log('onSelectItem', items);
    }
  },
  updated: function() {
    console.log('实例更新啦');
  },
  computed: {
    __GetTimes() {
      return this.$store.state.Common.times;
    },
  },
  components: {
    'md-menu-info': MenuInfo,
    'md-multiselect': Multiselect,
    
  }
};
</script>
