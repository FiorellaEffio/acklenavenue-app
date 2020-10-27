<template>
  <div id="app" class="bg-blue-500">
    <!-- <router-link to="/about">About</router-link> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
  },
  methods: {
    toggleMe() {
      this.$store.dispatch('toggle');
    },
  },
  created() {
    this.$store.dispatch('setCurrentUser');
    this.$store.dispatch('getStays');
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
}
</style>
