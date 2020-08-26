<template>
  <div>
    <InputSearch></InputSearch>
    <SearchWeather></SearchWeather>
  </div>
</template>

<script>
import InputSearch from '../components/InputSearch';
import SearchWeather from '../components/SearchWeather';
export default {
  components: { SearchWeather, InputSearch },
};
</script>

<style></style>
