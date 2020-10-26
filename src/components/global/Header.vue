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
          <div class="flex items-end">
            <img class="h-8" alt="Airbnb logo" src="img/airbnb-white.png">
            <span class="ml-2 font-bold text-xl text-white">airbnb</span>
          </div>
          <div class="flex">
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
            <div class="bg-white flex items-center rounded-full h-10 pl-3 pr-2 ml-2 cursor-pointer">
              <img class="h-4" alt="" src="img/icons/menu.png">
              <img class="h-6 ml-2" alt="" src="img/icons/user.png">
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center relative md:max-w-3xl mx-auto">
          <input
            class="h-12 rounded-full px-6 focus:outline-none w-full"
            type="text"
            placeholder="Where are you going?"
          />
          <div
            class="absolute bg-pink rounded-full p-2 flex justify-center
            items-center top-0 right-0 mt-2 mr-2 cursor-pointer"
          >
            <img class="h-4" alt="" src="img/icons/magnifiying-glass.png">
          </div>
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
        class="absolute w-1/2 h-32 bg-white rounded-sm shadow-lg flex items-center justify-center
        text-2xl"
      >
        modal
      </div>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    toggleModal() {
      this.$refs.modal.classList.toggle('opacity-0');
      this.$refs.modal.classList.toggle('pointer-events-none');
    },
  },
};
</script>
