import Vue from 'vue';
import Vuex from 'vuex';
import { fetchCurrentWeatherList, fetchDaysWeatherList } from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentData: {},
    currentWeather: [],
    currentTemp: '',
    fiveDaysData: [],
    fiveDaysList: [],
  },
  mutations: {
    SET_WEATHER(state, data) {
      state.currentData = data;
      state.currentWeather = data.weather[0];
      state.currentTemp = data.main.temp;
    },
    SET_FIVELIST(state, data) {
      state.fiveDaysData = data;
      state.fiveDaysList = data.list;
    },
  },
  actions: {
    FETCH_WEATHER(context, cityname) {
      return fetchCurrentWeatherList(cityname)
        .then(res => {
          context.commit('SET_WEATHER', res.data);
          return res;
        })
        .catch(error => {
          console.log(error);
        });
    },
    FEATH_FIVELIST(context, cityname) {
      return fetchDaysWeatherList(cityname)
        .then(res => {
          context.commit('SET_FIVELIST', res.data);
          return res;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  modules: {},
});
