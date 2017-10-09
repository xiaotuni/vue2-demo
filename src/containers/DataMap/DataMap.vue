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
    .space {
      flex: 1;
    }
  }
  .content {
    height: 90vh;
    padding: 5px;
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
      <div class="space"></div>
      <div class="desc"> 精通有道 DataMap.</div>
      <div class="space"></div>
    </div>
    <div class="content">
      <div class="dmLeft">
        <div class="dmPeopleData">
          <md-people-data></md-people-data>
        </div>
        <div class="dmCityData">
          <md-city-data></md-city-data>
        </div>
        <div class="dmMonitorData">
          <md-monitor-data></md-monitor-data>
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
          <md-rental-market></md-rental-market>
        </div>
        <div class="dmrSecondHandHousingMarket">
          <md-second-hand-housing-market></md-second-hand-housing-market>
        </div>
        <div class="dmrNewHomeMarket">
          <md-new-home-market></md-new-home-market>
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
      msg: '这是一个页面啦'
    };
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
