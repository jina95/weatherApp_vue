<template>
  <div id="app">
    <MainPage></MainPage>
  </div>
</template>

<script>
import MainPage from './views/MainPage';

export default {
  components: { MainPage },
};
</script>

<style>
@import url('../src/assets/weather-icons-master/css/weather-icons.css');
@import url('../src/assets/css/common.css');
@import url('../src/assets/css/reset.css');
</style>
