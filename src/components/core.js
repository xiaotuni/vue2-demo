import Utility from '../Common/Utility';
import ApiClient from '@/helpers/ApiClient';
const ApiInfo = new ApiClient(null).API;
import Menu from './Menu/Menu.vue';
import MenuInfo from './Menu/MenuInfo.vue';
import XtnScroll from './XtnScroll/XtnScroll.vue';
import PeopleData from './PeopleData/PeopleData.vue';
import CityData from './CityData/CityData.vue';
import MonitorData from './MonitorData/MonitorData.vue';
import SecondHandHousingMarket from './SecondHandHousingMarket/SecondHandHousingMarket.vue';
import NewHomeMarket from './NewHomeMarket/NewHomeMarket.vue';
import RentalMarket from './RentalMarket/RentalMarket.vue';

import DataMarketMap from './DataMaps/DataMarketMap.vue';
import Multiselect from './Multiselect/Multiselect.vue';

import ChartLine from './Charts/Line.vue';
import MultiselectArea from './Charts/MultiselectArea.vue';
import MultiselectMobike from './Charts/MultiselectMobike.vue';
import MultiselectPOI from './Charts/MultiselectPOI.vue';
import BankChart from './Charts/Bank.vue';
import DianpingChart from './Charts/Dianping.vue';
import CompanyChart from './Charts/Company.vue';

export {
  BankChart, DianpingChart, CompanyChart,
  Utility, MultiselectMobike, MultiselectArea, MultiselectPOI, ChartLine, DataMarketMap, Multiselect,
  CityData, MonitorData, PeopleData, RentalMarket, MenuInfo, Menu, NewHomeMarket,
  ApiInfo, XtnScroll, SecondHandHousingMarket
};
