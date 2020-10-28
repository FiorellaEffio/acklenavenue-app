<template>
  <div class="md:px-2 py-4 border-gray-300 border-t w-full flex">
    <div class="md:py-4 w-full flex">
      <div class="w-full sm:w-4/5 pr-2">
        <div>
          <p class="text-xs md:text-base">
            {{ monthName(data.checkin) }} {{ day(data.checkin) }}
            - {{ monthName(data.checkout) }} {{ day(data.checkout) }}
          </p>
          <p class="text-xs md:text-base font-bold flex">
            {{ stayDataTrip.name }}
          </p>
          <p class="text-xs md:text-base font-bold flex">
            $ {{ stayDataTrip.price }}
            <span class="font-normal mr-2">/ night</span>
          </p>
        </div>
      </div>
      <div class="w-full sm:w-1/5">
        <div
          class="hover:opacity-75 relative mb-2 cursor-pointer"
        >
          <img class="rounded-xl w-full" alt="" :src="stayDataTrip.img">
          <img class="absolute right-0 top-0 h-6 mt-2 mr-2" alt="" src="img/icons/heart.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Trip',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    months: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  }),
  computed: {
    ...mapGetters({
      stays: 'getStays',
    }),
    stayDataTrip() {
      return this.stays[this.data.stayId];
    },
  },
  created() {
  },
  methods: {
    monthName(dateStr) {
      const date = new Date(dateStr);
      return this.months[date.getMonth()];
    },
    day(dateStr) {
      const date = new Date(dateStr);
      return date.getDate();
    },
  },
};
</script>
