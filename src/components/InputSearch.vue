<template>
  <form @submit.prevent="submitCityName">
    <input type="text" v-model="cityName" placeholder="나라를 입력해 주세요" />
    <button>✔️</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      cityName: '',
    };
  },
  methods: {
    submitCityName() {
      this.$store.dispatch('FETCH_WEATHER', this.cityName);
      this.$store.dispatch('FEATH_FIVELIST', this.cityName);
    },
  },
  created() {
    this.$store.dispatch('FETCH_WEATHER', 'seoul');
    this.$store.dispatch('FEATH_FIVELIST', 'seoul');
  },
};
</script>

<style></style>
