<template>
  <div class="home">
    <top-header></top-header>
    <carousel-options></carousel-options>
    <carousel-experience></carousel-experience>
    <civic-action></civic-action>
    <trip-suggestions></trip-suggestions>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import Header from '../components/global/Header.vue';
import Footer from '../components/global/Footer.vue';
import CarouselOptions from '../components/home/CarouselOptions.vue';
import CarouselExperience from '../components/home/CarouselExperience.vue';
import CivicAction from '../components/home/CivicAction.vue';
import TripSuggestions from '../components/home/TripSuggestions.vue';

export default {
  name: 'Home',
  components: {
    'top-header': Header,
    'bottom-footer': Footer,
    'carousel-options': CarouselOptions,
    'carousel-experience': CarouselExperience,
    'civic-action': CivicAction,
    'trip-suggestions': TripSuggestions,
  },
};
</script>
<style>
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
