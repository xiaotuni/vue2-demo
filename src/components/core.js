import Utility from '../Common/Utility';
import ApiClient from '@/helpers/ApiClient';
const ApiInfo = new ApiClient(null).API;
import Menu from './Menu/Menu.vue';
import XtnScroll from './XtnScroll/XtnScroll.vue';
import PeopleData from './PeopleData/PeopleData.vue';
import CityData from './CityData/CityData.vue';
import MonitorData from './MonitorData/MonitorData.vue';
import SecondHandHousingMarket from './SecondHandHousingMarket/SecondHandHousingMarket.vue';
import NewHomeMarket from './NewHomeMarket/NewHomeMarket.vue';
import RentalMarket from './RentalMarket/RentalMarket.vue';
import NameValue from './DataRow/NameValue.vue';
import DataMarketMap from './DataMaps/DataMarketMap.vue';
import ChartLine from './Charts/Line.vue';

export {
  Utility, ChartLine, DataMarketMap, NameValue,
  CityData, MonitorData, PeopleData, RentalMarket, Menu, NewHomeMarket,
  ApiInfo, XtnScroll, SecondHandHousingMarket
};
