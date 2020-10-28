<template>
  <div class="home">
    <top-header></top-header>
    <trip-list></trip-list>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import Header from '../components/global/Header.vue';
import Footer from '../components/global/Footer.vue';
import TripList from '../components/trips/TripList.vue';

export default {
  name: 'StayUserList',
  components: {
    'top-header': Header,
    'bottom-footer': Footer,
    'trip-list': TripList,
  },
};
</script>
