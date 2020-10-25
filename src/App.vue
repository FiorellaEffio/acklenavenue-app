<template>
  <div id="app" class="bg-blue-500">
    <button @click="toogleMe">toogle me</button>
    <p>{{ isTrueApp }}</p>
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
    isTrueApp() {
      return this.$store.getters.isTrue;
    },
  },
  methods: {
    toogleMe() {
      this.$store.dispatch('toogle');
    },
  },
  created() {
    this.$store.dispatch('getFirebaseDatabase');
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap'); */
body {
  font-family: 'Montserrat', sans-serif;
}
</style>
