<style lang="scss" scoped>
.dataMapCss {
  font-size: 12px;
  background: #000;
  color: #fff;
  height: 100%;
  position: absolute;
  width: 100%;
  .title {
    font-size: 20px;
    padding: 5px;
    display: flex;
    height: 4vh;
    align-items: center;
    .space1 {
      flex: 1;
      height: 20%;
      background: -webkit-linear-gradient(left, #111111, #ddd7d7);
    }
    .space2 {
      height: 20%;
      flex: 1;
      background: -webkit-linear-gradient(right, #111111, #ddd7d7);
    }

    .desc {
      padding: 0px 10px;
    }
  }
  .content {
    height: 90vh;
    display: flex;
    .dmLeft {
      flex: 1;
      padding: 5px;
      >div {
        height: 31vh;
      }
    }
    .dmCenter {
      padding: 5px;
      flex: 2;
      position: relative;
      .mdcMap {
        height: 70%;
      }
      .mdcLine {
        height: 30%;
      }
    }
    .dmRight {
      flex: 1;
      padding: 5px;
      >div {
        height: 31vh;
      }
    }
  }
}
</style>

<template>
  <div class="dataMapCss">
    <div class="title">
      <div class="space1"></div>
      <div class="desc"> 精通有道 DataMap</div>
      <div class="space2"></div>
    </div>
    <div class="content">
      <div class="dmLeft">
        <div class="dmPeopleData">
          <md-people-data TitleDesc="人口数据指标" :DataSource="DataInfo.PeopleData"></md-people-data>
        </div>
        <div class="dmCityData">
          <md-city-data TitleDesc="城市发展指标" :DataSource="DataInfo.CityData"></md-city-data>
        </div>
        <div class="dmMonitorData">
          <md-monitor-data TitleDesc="规划监测指标" :DataSource="DataInfo.MonitorData"></md-monitor-data>
        </div>
      </div>
      <div class="dmCenter">
        <div class="mdcMap">
          <md-data-market-map></md-data-market-map>
        </div>
        <div class="mdcLine">
          <md-chart-line></md-chart-line>
        </div>
      </div>
      <div class="dmRight">
        <div class="dmrRentalMarket">
          <md-rental-market :DataSource="DataInfo.RentalMarket" TitleDesc="租赁市场指标"></md-rental-market>
        </div>
        <div class="dmrSecondHandHousingMarket">
          <md-second-hand-housing-market :DataSource="DataInfo.SecondHandHousingMarket" TitleDesc="二手房市场指标"></md-second-hand-housing-market>
        </div>
        <div class="dmrNewHomeMarket">
          <md-new-home-market :DataSource="DataInfo.NewHomeMarket" TitleDesc="新房市场指标"></md-new-home-market>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Utility, ApiInfo, ChartLine, DataMarketMap, MonitorData, CityData, PeopleData,
  RentalMarket, NewHomeMarket, SecondHandHousingMarket
} from '@/components/core';
export default {
  name: 'DataMap',
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
    'md-people-data': PeopleData,
    'md-city-data': CityData,
    'md-monitor-data': MonitorData,
    'md-rental-market': RentalMarket,
    'md-new-home-market': NewHomeMarket,
    'md-second-hand-housing-market': SecondHandHousingMarket,
    'md-data-market-map': DataMarketMap,
    'md-chart-line': ChartLine,
  }
};
</script>
