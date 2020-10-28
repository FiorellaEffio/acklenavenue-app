<template>
  <div class="px-6 md:px-10 py-4 border-gray-300 border-t">
    <div class="lg:max-w-screen-xl lg:mx-auto flex flex-wrap">
      <p class="sm:mx-1 mb-4 md:mx-2 font-bold text-2xl w-full">Trips - Reservation Details</p>
      <template v-if="trips">
        <div class="lg:max-w-screen-md md:mx-auto">
          <trip
            v-for="(trip, index) in trips"
            :key="'trip-' + index"
            :data="trip"
          >
          </trip>
        </div>
      </template>
      <p v-else class="sm:mx-1 md:mx-2 mb-20">You don't have any trip yet, start searching</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Trip from './Trip.vue';

export default {
  name: 'TripList',
  components: {
    Trip,
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      trips: 'getTrips',
    }),
  },
  created() {
    if (this.user) {
      this.$store.dispatch('setFirebaseTrips', this.user.id);
    }
  },
};
</script>
