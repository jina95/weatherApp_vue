<template>
  <div class="search-weather-com">
    <div class="current-weather">
      {{ convertToDate() }}
      <h2>{{ currentData.name }}</h2>
      <!-- <div class="current-weather-box"> -->
      <strong class="current-temp">{{ cunrrentTemp }}°</strong>
      <div class="current-weather-icon-box">
        <i :class="`w-icon wi wi-owm-${currentWeather.id}`"></i>
        <span>{{ currentWeather.main }}</span>
      </div>

      <ul>
        <li>
          <a href=""></a>
        </li>
      </ul>
    </div>
    <WeeklyInfor></WeeklyInfor>
  </div>
</template>

<script>
import WeeklyInfor from './WeeklyInfor';
export default {
  components: { WeeklyInfor },
  // data() {
  //   return {
  //     weatherInfor: this.weather,
  //   };
  // },
  computed: {
    currentData() {
      return this.$store.state.currentData;
    },
    currentWeather() {
      return this.$store.state.currentWeather;
    },
    cunrrentTemp() {
      return Math.floor(this.$store.state.currentTemp - 273.15);
    },
  },
  methods: {
    convertToDate() {
      const dateUtc = this.$store.state.currentData.dt;
      console.log(dateUtc);
      return new Date(dateUtc);
      // 🐶 이상하게 변환이 된다.. 확인해보기!
    },
    // cunrrentTemp() {
    //   let temp = this.$store.state.currentData.main.temp;
    //   return Math.floor(temp - 273.15);
    // },
  },
};
</script>

<style></style>
