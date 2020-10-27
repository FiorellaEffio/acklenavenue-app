<template>
  <div class="home">
    <top-header></top-header>
    stay user list
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import Header from '../components/global/Header.vue';
import Footer from '../components/global/Footer.vue';

export default {
  name: 'StayUserList',
  components: {
    'top-header': Header,
    'bottom-footer': Footer,
  },
};
</script>
