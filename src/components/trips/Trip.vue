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
        <button
          @click="toggleModal"
          class="mt-2 py-1 px-2 rounded-xl text-white font-bold bg-pink"
        >
          Delete Trip
        </button>
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
    <div
      ref="modal"
      class="fixed opacity-0 pointer-events-none z-20 w-full h-screen top-0 left-0 flex
      items-center justify-center"
    >
      <div
        @click="toggleModal"
        class="absolute w-full h-full bg-black opacity-25 top-0 left-0 cursor-pointer"
      ></div>
      <div
        class="absolute w-11/12 md:w-3/5 lg:w-2/5 bg-white rounded-sm shadow-lg flex items-center
        justify-center text-2xl rounded-xl flex-col"
      >
        <div class="flex justify-center items-center relative w-full pt-4">
          <p class="text-base font-bold pl-12 pr-4 leading-tight w-full md:w-auto">
            Are you sure you want to remove this trip?
            <span class="text-pink">
              {{ monthName(data.checkin) }} {{ day(data.checkin) }}
              - {{ monthName(data.checkout) }} {{ day(data.checkout) }}
              {{ stayDataTrip.name }}
            </span>
          </p>
          <div
            @click="toggleModal"
            class="mt-5 h-3 ml-4 h-6 w-6 rounded-full hover:bg-gray-100 absolute top-0
            left-0 flex justify-center items-center cursor-pointer"
          >
            <img class="h-3" alt="" src="img/icons/close.png">
          </div>
        </div>
        <div class="flex justify-end w-full p-4">
          <button
            @click="toggleModal"
            class="bg-pink rounded-xl text-white text-sm p-3 focus:outline-none"
          >
            No
          </button>
          <button
            @click="deleteTrip"
            class="ml-2 bg-white rounded-xl text-black border-black border font-bold text-sm p-3
            focus:outline-none"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import firebase from '@/firebase';

export default {
  name: 'Trip',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    trip: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    showDeleteModal: false,
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
      user: 'getUser',
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
    toggleModal() {
      this.$refs.modal.classList.toggle('opacity-0');
      this.$refs.modal.classList.toggle('pointer-events-none');
    },
    deleteTrip() {
      firebase.database.ref(`trips/${this.user.id}/${this.trip}/`).set(null);
      this.toggleModal();
    },
  },
};
</script>
