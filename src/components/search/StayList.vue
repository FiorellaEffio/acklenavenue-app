<template>
  <div class="px-6 md:px-10 py-4 border-gray-300 border-t">
    <div class="lg:max-w-screen-xl lg:mx-auto flex flex-wrap">
      <p class="sm:mx-1 md:mx-2 font-bold text-2xl w-full">Stays everywhere</p>
      <stay-details
        v-for="(stay, index) in stays"
        :key="'stay-' + index"
        :data="stay"
        :stay-id="keyStays[index]"
      >
      </stay-details>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StayDetails from './StayDetails.vue';

export default {
  name: 'StayList',
  components: {
    StayDetails,
  },
  computed: {
    ...mapGetters({
      stays: 'getStays',
    }),
    keyStays() {
      return Object.keys(this.stays);
    },
  },
};
</script>
