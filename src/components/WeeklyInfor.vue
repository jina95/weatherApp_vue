<template>
  <div>
    <h1>weekly</h1>
    <div>{{ fiveDaysList }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: this.$store.state.fiveDaysData,
    };
  },
  computed: {
    fiveDaysList() {
      return this.$store.state.fiveDaysData;
    },
  },
};
</script>

<style></style>
