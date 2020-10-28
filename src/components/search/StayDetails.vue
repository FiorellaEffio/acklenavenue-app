<template>
  <div class="w-full sm:w-1/2 lg:w-1/3">
    <div class="sm:mx-1 md:mx-2 my-3">
      <div
        @click="toggleModal"
        class="hover:opacity-75 relative mb-2 cursor-pointer"
      >
        <img class="rounded-xl w-full" alt="" :src="data.img">
        <img class="absolute right-0 top-0 h-6 mt-2 mr-2" alt="" src="img/icons/heart.png">
      </div>
      <div class="flex items-center">
        <img class="h-4" alt="" src="img/icons/star.png">
        <p class="text-xs ml-2 mt-1">{{ data.stars }}</p>
      </div>
      <p class="text-md">{{ data.name }}</p>
      <p class="text-md">{{ data.description }}</p>
      <p class="text-md font-bold">
        $ {{ data.price }}
        <span class="font-normal">/ night</span>
      </p>
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
        class="absolute w-11/12 lg:w-3/5 bg-white rounded-sm shadow-lg flex items-center
        justify-center text-2xl rounded-xl flex-col"
      >
        <div class="h-16 flex justify-center items-center relative w-full">
          <p class="text-base font-bold pl-12 pr-4 md:px-0 leading-tight w-full md:w-auto">
            {{ data.name }}
          </p>
          <div
            @click="toggleModal"
            class="mt-5 h-3 ml-4 h-6 w-6 rounded-full hover:bg-gray-100 absolute top-0
            left-0 flex justify-center items-center cursor-pointer"
          >
            <img class="h-3" alt="" src="img/icons/close.png">
          </div>
        </div>
        <div class="border-gray-300 border-t w-full"></div>
        <div class="p-4 w-full flex flex-wrap">
          <div class="w-full sm:w-1/2">
            <div
              class="relative mb-2"
            >
              <img class="rounded-xl w-full" alt="" :src="data.img">
              <img class="absolute right-0 top-0 h-6 mt-2 mr-2" alt="" src="img/icons/heart.png">
            </div>
          </div>
          <div class="w-full sm:w-1/2 sm:pl-4">
            <div>
              <p class="text-xs font-bold flex">
                $ {{ data.price }}
                <span class="font-normal mr-2">/ night</span>
              </p>
            </div>
            <div class="w-full rounded-xl border-gray-300 border mt-2 md:mt-4 relative">
              <input
                v-model="guests"
                class="h-10 rounded-full text-sm px-3 focus:outline-none w-full"
                type="number"
                min="0"
              >
              <span class="text-xxs absolute top-0 bg-white left-0 -mt-2 ml-4 px-1">
                Guests (include children)
              </span>
            </div>
            <div class="w-full rounded-xl border-gray-300 border mt-2 md:mt-4 relative">
              <input
                v-model="checkindate"
                class="h-10 rounded-full text-sm px-3 focus:outline-none w-full"
                type="date"
              />
              <span class="text-xxs absolute top-0 bg-white left-0 -mt-2 ml-4 px-1">Check In</span>
            </div>
            <div class="w-full rounded-xl border-gray-300 border mt-3 relative">
              <input
                v-model="checkoutdate"
                class="h-10 rounded-full text-sm px-3 focus:outline-none w-full"
                type="date"
              />
              <span class="text-xxs absolute top-0 bg-white left-0 -mt-2 ml-4 px-1">Check Out</span>
            </div>
            <button
              :disabled="!user || addTripDisabled"
              @click="addTrip"
              :class="[ !user ? 'opacity-25 cursor-default' : 'cursor-pointer' ]"
              class="focus:outline-none w-full bg-pink text-white font-bold text-sm
              rounded-lg py-3 mt-2"
            >
              Add Trip
            </button>
            <p v-if="!user" class="text-xs text-pink mt-1">
              <span class="text-white text-xxs bg-pink rounded-full px-2 py-1">!</span>
              You must be logged in to add a trip
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'StayDetails',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    stayId: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
    }),
    checkinErrors() {
      const errors = [];
      if (this.checkindate === '') return errors;
      const todaysDate = new Date();
      const pickedDate = new Date(this.checkindate);
      if (pickedDate > todaysDate) return errors;
      errors.push('Choose a date after today');
      return errors;
    },
    checkoutErrors() {
      const errors = [];
      if (this.checkindate === '' || this.checkoutdate === '') return errors;
      const checkinDate = new Date(this.checkindate);
      const checkoutDate = new Date(this.checkoutdate);
      if (checkoutDate > checkinDate) return errors;
      errors.push('Choose a date after your check in date');
      return errors;
    },
    guestsErrors() {
      const errors = [];
      const guestsNumber = Number(this.guests);
      if (Number.isInteger(guestsNumber) && guestsNumber > 0) return errors;
      errors.push('Have to be integer and equals or bigger than 1');
      return errors;
    },
    addTripDisabled() {
      if (this.checkindate !== '' && this.checkoutdate !== '' && this.guests !== '') {
        if (this.checkinErrors.length === 0 && this.checkoutErrors.length === 0
        && this.guestsErrors.length === 0) {
          return false;
        }
        return true;
      }
      return true;
    },
  },
  data: () => ({
    checkindate: '',
    checkoutdate: '',
    guests: 1,
  }),
  methods: {
    toggleModal() {
      this.$refs.modal.classList.toggle('opacity-0');
      this.$refs.modal.classList.toggle('pointer-events-none');
    },
    addTrip() {
      this.$store.dispatch('addTripDatabase', {
        checkin: this.checkindate,
        checkout: this.checkoutdate,
        guests: this.guests,
        stayId: this.stayId,
      });
      this.guests = '';
      this.checkindate = '';
      this.checkoutdate = '';
    },
  },
};
</script>
