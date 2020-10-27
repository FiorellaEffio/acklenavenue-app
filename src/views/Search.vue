<template>
  <div class="home">
    <top-header></top-header>
    <stay-list></stay-list>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import Header from '../components/global/Header.vue';
import Footer from '../components/global/Footer.vue';
import StayList from '../components/search/StayList.vue';

export default {
  name: 'Search',
  components: {
    'top-header': Header,
    'bottom-footer': Footer,
    'stay-list': StayList,
  },
};
</script>
