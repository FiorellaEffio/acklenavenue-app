<template>
    <div class="bg-black p-6 md:px-10 md:py-12">
      <div class="flex max-w-screen-xl mx-auto justify-between">
        <div class="flex flex-col">
          <p class="text-white text-xl font-bold md:text-3xl">
            Online Experiences: Field Trips
          </p>
          <p class="text-white mb-3">
            Join interactive, global adventures with inspiring, kid-friendly hosts.
          </p>
        </div>
        <button
          class="border hidden md:block border-white rounded-lg h-10 px-4 py-2 my-3
          hover:bg-gray-200 focus:outline-none"
        >
          <span class="font-bold text-sm text-white">Explore all</span>
        </button>
      </div>
      <div class="flex overflow-x-scroll pt-6 max-w-screen-xl mx-auto lg:overflow-x-hidden">
        <div
          class="carousel-exp-card bg-gray-900 rounded-xl pb-4 mr-4 mb-4 md:w-4/5
          first-carouselexp-card"
        >
          <img
            class="carousel-img rounded-t-xl w-full"
            alt="Carousel 1 Image"
            src="img/carousel-exp/image-1.jpg"
          >
          <div class="px-5 pt-4">
            <p class="font-bold text-white text-lg mb-1">
              Decode the science of 2020 with Bill Nye
            </p>
          </div>
        </div>
        <div
          class="flex md:flex-col md:w-1/3 lg:w-1/2 md:flex-wrap lg:flex-row justify-space-between"
        >
          <div class="mr-4 mb-4 lg:pr-2 md:mr-0 lg:w-1/2">
            <div class="carousel-exp-card bg-gray-900 rounded-xl pb-4">
              <img
                class="carousel-img rounded-t-xl"
                alt="Carousel 2 Image"
                src="img/carousel-exp/image-2.jpg"
              >
              <div class="px-5 pt-4">
                <p class="font-bold text-white text-lg mb-1">
                  Go on a leopard safari in Sri Lanka
                </p>
              </div>
            </div>
          </div>
          <div class="mr-4 mb-4 lg:pl-2 md:mr-0 lg:w-1/2">
            <div class="carousel-exp-card bg-gray-900 rounded-xl pb-4">
              <img
                class="carousel-img rounded-t-xl"
                alt="Carousel 2 Image"
                src="img/carousel-exp/image-3.jpg"
              >
              <div class="px-5 pt-4">
                <p class="font-bold text-white text-lg mb-1">
                  Discover Buenos Aires street art and sketch
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-exp-card bg-gray-900 rounded-xl pb-4 mb-4 md:hidden lg:block">
            <img
              class="md:hidden carousel-img rounded-t-xl"
              alt="Carousel 2 Image"
              src="img/carousel-exp/image-4.jpg"
            >
            <img
              class="hidden lg:block carousel-img rounded-t-xl"
              alt="Carousel 2 Image"
              src="img/carousel-exp/image-4-lgsize.jpg"
            >
            <div class="px-5 pt-4">
              <p class="font-bold text-white text-lg mb-1">
                Dive under the sea with a shark scientist
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="border md:hidden border-white rounded-lg px-4 py-2 my-3 hover:bg-gray-200
        focus:outline-none"
      >
        <span class="font-bold text-sm text-white">Explore all</span>
      </button>
    </div>
</template>
<script>
export default {
  name: 'CarouselExperience',
  components: {
  },
};
</script>
