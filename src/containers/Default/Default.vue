<style lang="scss" scoped>
.defaultCss {
  font-size: 14px;
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
    display: flex;
    .item {
      >div {
        margin-bottom: 5px;
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
          <md-multiselect-area :onSelectItem="onSelectAreaItem" :DataSource="DataInfo.AreaCityData" />
        </div>
        <div>
          <md-multiselect-poi :onSelectItem="onSelectPOIItem" :DataSource="DataInfo.POIData" />
        </div>
        <div>
          <md-multiselect-mobike :onSelectItem="onSelectPOIItem" :DataSource="DataInfo.MobikeData" />
        </div>
        <div>
          <md-chart-bank />
        </div>
        <div>
          <md-chart-dianping />
        </div>
        <div>
          <md-chart-company />
        </div>
      </div>
    </div>
    <div class="mapInfo">地图位置</div>
  </div>
</template>

<script>
import {
  BankChart, DianpingChart, CompanyChart,
  MenuInfo, Utility, ApiInfo, Multiselect, MultiselectPOI, MultiselectArea, MultiselectMobike,
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
      this.DataInfo.AreaCityData = [
        { id: 1, title: '朝阳', },
        { id: 2, title: '海淀', },
        { id: 3, title: '东城', },
        { id: 4, title: '西城', },
        { id: 5, title: '通州', },
        { id: 6, title: '顺义', },
        { id: 7, title: '昌平', },
      ];
      this.DataInfo.POIData = [
        { id: 1, title: '学校', },
        { id: 2, title: '医院', },
      ];
      this.DataInfo.MobikeData = [
        { id: 1, title: '2点' },
        { id: 1, title: '4点' },
        { id: 1, title: '6点' },
        { id: 1, title: '8点' },
        { id: 1, title: '10点' },
        { id: 1, title: '12点' },
        { id: 1, title: '14点' },
        { id: 1, title: '16点' },
        { id: 1, title: '18点' },
        { id: 1, title: '20点' },
        { id: 1, title: '22点' },
        { id: 1, title: '24点' },
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
    },
    onSelectPOIItem(items) {
      console.log('onSelectPOIItem', items);
    },

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
    'md-multiselect-area': MultiselectArea,
    'md-multiselect-mobike': MultiselectMobike,
    'md-multiselect-poi': MultiselectPOI,
    'md-chart-bank': BankChart,
    'md-chart-dianping': DianpingChart,
    'md-chart-company': CompanyChart,
  }
};
</script>
