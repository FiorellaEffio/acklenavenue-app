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
