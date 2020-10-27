<template>
  <div id="app" class="bg-blue-500">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
  },
  methods: {
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

::-webkit-scrollbar {
 height: 0px;
 width: 0px;
}

.h-fit {
  height: fit-content;
}

.text-xxs {
  font-size: 10px;
}

.bg-image {
  background-image: url('/img/bg-intro/bg-intro-320.jpg');
  min-height: 427px;
}

.text-intro {
  max-width: 12rem;
}

.carousel-card {
  min-width: 272px;
}

.carousel-exp-card {
  min-width: 330px;
}

.places-container {
  min-width: 500px;
}

.place-img {
  height: 72px;
  width: 72px;
}

.max-w-screen-xl {
  max-width: 1420px !important;
}

@media (min-width: 500px) {
  .bg-image {
    background-image: url('/img/bg-intro/bg-intro-720.jpg');
  }
}

@media (min-width: 768px) {
  .bg-image {
    background-image: url('/img/bg-intro/bg-intro-960.jpg');
    min-height: 580px;
  }
  .carousel-card, .carousel-exp-card {
    min-width: 0;
  }
}

@media (min-width: 1024px) {
  .bg-image {
    background-image: url('/img/bg-intro/bg-intro-1200.jpg');
  }
  .first-carouselexp-card {
    width: 58% !important;
  }
}
</style>
