<template>
  <div>
    <div class="bg-gray-100 px-6 md:px-10 py-4 underline">
      <p class="font-bold sm:text-base text-xs text-center underline">
        Get the latest on our COVID-19 response
      </p>
    </div>
    <div
      class="bg-intro relative"
    >
      <div class="bg-image bg-cover bg-center h-fit"></div>
      <div class="absolute px-6 md:px-10 py-4 top-0 w-full">
        <div class="flex justify-between items-center mb-3">
          <router-link to="/">
            <div class="flex items-end">
              <img class="h-8" alt="Airbnb logo" src="img/airbnb-white.png">
              <span class="ml-2 font-bold text-xl text-white">airbnb</span>
            </div>
          </router-link>
          <div class="flex relative">
            <p
              class="items-center h-10 rounded-full mx-1 px-4 text-white text-sm
              font-bold cursor-pointer hover:bg-gray-400 hidden sm:flex"
            >
              Become a host
            </p>
            <div class="flex items-center rounded-full h-10 px-3 hover:bg-gray-400 cursor-pointer">
              <img class="h-4" alt="" src="img/icons/earth-grid-symbol.png">
              <img class="my-3 h-2 ml-2" alt="" src="img/icons/down-arrow.png">
            </div>
            <div
              @click="dropdownLogin = !dropdownLogin"
              class="bg-white flex items-center rounded-full h-10 pl-3 pr-2 ml-2
              cursor-pointer font-bold"
            >
              <img class="h-4" alt="" src="img/icons/menu.png">
              <span v-if="user" class="ml-2">{{ user.displayName || user.email }}</span>
              <img
                class="h-6 ml-2"
                alt=""
                :src="user ? user.photoURL : 'img/icons/user.png'"
              >
            </div>
            <div
              v-show="dropdownLogin"
              class="shadow-lg text-sm font-bold rounded-xl absolute bottom-0 right-0 -mb-20
              bg-white z-10"
            >
              <template v-if="user">
                <router-link to="/trips">
                  <div
                    class="rounded-xl px-5 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    My trips
                  </div>
                </router-link>
                <div
                  @click="signOut"
                  class="rounded-xl px-5 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Log out
                </div>
              </template>
              <template v-else>
                <div
                  @click="showDialog('login')"
                  class="rounded-xl px-5 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Login
                </div>
                <div
                  @click="showDialog('register')"
                  class="rounded-xl px-5 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Sign up
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center relative md:max-w-3xl mx-auto">
          <input
            class="h-12 rounded-full px-6 focus:outline-none w-full"
            type="text"
            placeholder="Where are you going?"
          />
          <router-link to="/search">
            <div
              class="absolute bg-pink rounded-full p-2 flex justify-center
              items-center top-0 right-0 mt-2 mr-2 cursor-pointer"
            >
              <img class="h-4" alt="" src="img/icons/magnifiying-glass.png">
            </div>
          </router-link>
        </div>
      </div>
      <div
        class="absolute flex flex-col justify-center bottom-0 pt-4 w-full pb-3 mb-32 md:mb-28
        md:mr-0 md:ml-10"
      >
        <h1 class="font-bold text-2xl text-center text-white mb-2 md:text-left md:text-4xl">
          Go Near
        </h1>
        <p
          class="font-bold mx-auto text-intro text-center text-xs text-white md:text-left
          md:text-base md:m-0 md:max-w-none"
        >
            Settle in somewhere new<br>
            Discover stays to live, work, or just relax.
        </p>
        <button
          class="bg-white rounded-lg m-auto px-4 py-2 mt-3 hover:bg-gray-100 focus:outline-none
          md:ml-0"
        >
          <span class="font-bold text-sm">Explore nearby</span>
        </button>
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
        <div class="h-16 flex justify-center items-center relative w-full">
          <p class="text-base font-bold">
            {{ dialogType === 'login' ? 'Login' : dialogType === 'register' ? 'Sign Up' : '' }}
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
        <sign-up v-if="dialogType === 'register'" v-on:close="toggleModal">
          <p class="text-sm text-gray-900 mt-3">
            Already have an account?
            <span
              @click="dialogType === 'login' ? dialogType = 'register' : dialogType = 'login'"
              class="underline font-bold cursor-pointer"
            >
              Log in
            </span>
          </p>
        </sign-up>
        <login v-else v-on:close="toggleModal">
          <p class="text-sm text-gray-900 mt-3">
            Don't have an account?
            <span
              @click="dialogType === 'login' ? dialogType = 'register' : dialogType = 'login'"
              class="underline font-bold cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </login>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import SignUp from './SignUp.vue';
import Login from './Login.vue';

export default {
  name: 'Header',
  components: {
    SignUp,
    Login,
  },
  data: () => ({
    userAuth: false,
    dropdownLogin: false,
    dialogType: '',
  }),
  computed: {
    ...mapGetters({
      user: 'getUser',
      stays: 'getStays',
    }),
  },
  created() {
    console.log(this.user);
    console.log(this.stays);
  },
  methods: {
    toggleModal() {
      this.$refs.modal.classList.toggle('opacity-0');
      this.$refs.modal.classList.toggle('pointer-events-none');
      console.log(this.stays);
    },
    showDialog(type) {
      /* eslint-disable */
      this.dialogType = type;
      this.dropdownLogin = false;
      this.toggleModal();
    },
    signOut() {
      this.dropdownLogin = false;
      this.$store.dispatch('signOutFirebase');
    },
  },
};
</script>
