<template>
  <div class="home">
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
        <div class="w-full">
          <input
            class="h-12 rounded-full pl-12 focus:outline-none w-full"
            type="text"
            placeholder="Where are you going?"/>
        </div>
        <div class="absolute flex flex-col justify-center left-0 pt-4 w-full">
          <h1 class="font-bold text-2xl text-center text-white mb-2">Go Near</h1>
          <p class="font-bold mx-auto text-intro text-center text-xs text-white">
            Settle in somewhere new<br>
            Discover stays to live, work, or just relax.
          </p>
          <button
            class="bg-white rounded-lg m-auto px-4 py-2 mt-3 hover:bg-gray-100 focus:outline-none"
          >
            <span class="font-bold text-sm">Explore nearby</span>
          </button>
        </div>
      </div>
    </div>
    <div class="flex overflow-x-scroll py-6 px-5 md:px-10 max-w-screen-xl mx-auto">
      <div class="carousel-card rounded-xl shadow-lg pb-4 m-2">
        <img class="rounded-t-xl" alt="Carousel 1 Image" src="img/carousel/img-1.jpg">
        <div class="px-5 pt-4">
          <p class="font-bold text-lg mb-1">Unique stays</p>
          <p class="opacity-75">Spaces that are more than just a place to sleep.</p>
        </div>
      </div>
      <div class="carousel-card rounded-xl shadow-lg pb-4 m-2">
        <img class="rounded-t-xl" alt="Carousel 2 Image" src="img/carousel/img-2.jpg">
        <div class="px-5 pt-4">
          <p class="font-bold text-lg mb-1">Online Experiences</p>
          <p class="opacity-75">A new way to travel from home</p>
        </div>
      </div>
      <div class="carousel-card rounded-xl shadow-lg pb-4 m-2">
        <img class="rounded-t-xl" alt="Carousel 3 Image" src="img/carousel/img-3.jpg">
        <div class="px-5 pt-4">
          <p class="font-bold text-lg mb-1">Entire homes</p>
          <p class="opacity-75">Comfortable private places, with room for friends or family</p>
        </div>
      </div>
    </div>
    <div class="bg-black p-6 md:px-10">
      <p class="text-white text-xl font-bold">Online Experiences: Field Trips</p>
      <p class="text-white mb-3">
        Join interactive, global adventures with inspiring, kid-friendly hosts.
      </p>
      <div class="flex overflow-x-scroll pt-6 max-w-screen-xl mx-auto lg:overflow-x-hidden">
        <div class="carousel-exp-card bg-gray-900 rounded-xl pb-4 mr-4 mb-4 md:w-1/2">
          <img
            class="carousel-img rounded-t-xl"
            alt="Carousel 1 Image"
            src="img/carousel-exp/image-1.jpg"
          >
          <div class="px-5 pt-4">
            <p class="font-bold text-white text-lg mb-1">
              Decode the science of 2020 with Bill Nye
            </p>
          </div>
        </div>
        <!-- 50% images -->
        <div class="flex md:flex-col md:w-1/2 md:flex-wrap lg:flex-row justify-space-between">
          <div class="mr-4 mb-4 lg:pr-2 lg:mr-0 lg:w-1/2">
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
          <div class="mr-4 mb-4 lg:pl-2 lg:mr-0 lg:w-1/2">
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
              class="carousel-img rounded-t-xl"
              alt="Carousel 2 Image"
              src="img/carousel-exp/image-4.jpg"
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
        class="border border-white rounded-lg px-4 py-2 my-3 hover:bg-gray-200 focus:outline-none"
      >
        <span class="font-bold text-sm text-white">Explore all</span>
      </button>
    </div>
    <div class="px-6 pt-8 pb-2 md:px-10 lg:py-10 lg:mt-3">
      <div class="max-w-screen-xl mx-auto lg:flex">
        <div class="lg:w-1/2">
          <p class="text-xl font-bold lg:text-4xl lg:pr-3">
            Have you made your plan to vote? Let's get #VoteReady.
          </p>
          <button
            class="hidden lg:block border border-black rounded-lg px-5 py-2 my-6
            hover:bg-gray-100 focus:outline-none"
          >
            <span class="font-bold">Civic Action Center</span>
          </button>
        </div>
        <p class="opacity-75 mt-3 text-sm lg:w-1/2 lg:text-lg lg:leading-7 lg:opacity-100 lg:ml-3">
          This year more than ever, voting early is a great way to avoid lines, stay safe, and
          ensure your voice is heard. Visit Airbnb’s Civic Action Center, a one-stop resource
          for Election information, to check your voter registration and learn about all your
          voting options.
        </p>
        <button
          class="lg:hidden border border-black rounded-lg px-5 py-2 my-6
          hover:bg-gray-100 focus:outline-none"
        >
          <span class="font-bold">Civic Action Center</span>
        </button>
      </div>
    </div>
    <div class="pl-6 py-8 md:px-10">
      <p class="text-2xl font-bold max-w-screen-xl mx-auto">Your next escape</p>
      <div class="overflow-x-scroll py-6 max-w-screen-xl mx-auto">
        <div class="places-container flex flex-wrap">
          <div class="flex w-1/2 lg:w-1/4 mt-1 mb-2">
            <img
              class="place-img rounded-xl"
              alt="Carousel 2 Image"
              src="img/places/place.jpg"
            >
            <div class="ml-3 flex flex-col justify-center">
              <p class="font-bold">Mala</p>
              <p>
                <span class="font-bold">S/505</span>
                /night avg.
              </p>
            </div>
          </div>
          <div class="flex w-1/2 lg:w-1/4 mt-1 mb-2">
            <img
              class="place-img rounded-xl"
              alt="Carousel 2 Image"
              src="img/places/place.jpg"
            >
            <div class="ml-3 flex flex-col justify-center">
              <p class="font-bold">Mala</p>
              <p>
                <span class="font-bold">S/505</span>
                /night avg.
              </p>
            </div>
          </div>
          <div class="flex w-1/2 lg:w-1/4 mt-1 mb-2">
            <img
              class="place-img rounded-xl"
              alt="Carousel 2 Image"
              src="img/places/place.jpg"
            >
            <div class="ml-3 flex flex-col justify-center">
              <p class="font-bold">Mala</p>
              <p>
                <span class="font-bold">S/505</span>
                /night avg.
              </p>
            </div>
          </div>
          <div class="flex w-1/2 lg:w-1/4 mt-1 mb-2">
            <img
              class="place-img rounded-xl"
              alt="Carousel 2 Image"
              src="img/places/place.jpg"
            >
            <div class="ml-3 flex flex-col justify-center">
              <p class="font-bold">Mala</p>
              <p>
                <span class="font-bold">S/505</span>
                /night avg.
              </p>
            </div>
          </div>
          <div class="flex w-1/2 lg:w-1/4 mt-1 mb-2">
            <img
              class="place-img rounded-xl"
              alt="Carousel 2 Image"
              src="img/places/place.jpg"
            >
            <div class="ml-3 flex flex-col justify-center">
              <p class="font-bold">Mala</p>
              <p>
                <span class="font-bold">S/505</span>
                /night avg.
              </p>
            </div>
          </div>
          <div class="flex w-1/2 lg:w-1/4 mt-1 mb-2">
            <img
              class="place-img rounded-xl"
              alt="Carousel 2 Image"
              src="img/places/place.jpg"
            >
            <div class="ml-3 flex flex-col justify-center">
              <p class="font-bold">Mala</p>
              <p>
                <span class="font-bold">S/505</span>
                /night avg.
              </p>
            </div>
          </div>
          <div class="flex w-1/2 lg:w-1/4 mt-1 mb-2">
            <img
              class="place-img rounded-xl"
              alt="Carousel 2 Image"
              src="img/places/place.jpg"
            >
            <div class="ml-3 flex flex-col justify-center">
              <p class="font-bold">Mala</p>
              <p>
                <span class="font-bold">S/505</span>
                /night avg.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="bg-gray-100 px-6  md:px-10 py-4 border-gray-300 border-t">
      <div class="lg:max-w-screen-xl lg:mx-auto lg:flex">
        <div class="pt-5 pb-3 flex flex-col md:flex-row flex-wrap h-fit text-sm">
          <p class="font-bold w-full md:my-2">ABOUT</p>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            How Airbnb works
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Newsroom
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Airbnb Plus
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Airbnb Luxe
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Hotel Tonight
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Airbnb for Work
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Olympics
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Careers
          </a>
        </div>
        <div class="border-gray-300 border-t"></div>
        <div class="pt-5 pb-3 flex flex-col md:flex-row flex-wrap h-fit text-sm">
          <p class="font-bold w-full md:my-2">COMMUNITY</p>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Diversity & Belonging
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Against Discrimination
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Accessibility
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Airbnb Associates
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Frontline Stays
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Invite friends
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Gift Cards
          </a>
        </div>
        <div class="border-gray-300 border-t"></div>
        <div class="pt-5 pb-3 flex flex-col md:flex-row flex-wrap h-fit text-sm">
          <p class="font-bold w-full md:my-2">HOST</p>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Host your name
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Host an Online Experience
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Host an Experience
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Responsible hosting
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Open Homes
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Resource Center
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Community Center
          </a>
        </div>
        <div class="border-gray-300 border-t"></div>
        <div class="pt-5 pb-3 flex flex-col md:flex-row flex-wrap h-fit text-sm">
          <p class="font-bold w-full md:my-2">SUPPORT</p>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Updates for COVID-19
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Help Center
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Cancellation options
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Neighborhood Support
          </a>
          <a class="hover:underline cursor-pointer mt-2 mb-1 md:my-2 md:w-1/3 lg:w-full">
            Trust & Safety
          </a>
        </div>
        <div class="border-gray-300 border-t mb-16"></div>
      </div>
    </div>

    <div class="flex bg-white fixed bottom-0 left-0 w-full">
      <div class="flex justify-center py-2 w-1/5 text-xs">
        Explore
      </div>
      <div class="flex justify-center py-2 w-1/5 text-xs">
        Saved
      </div>
      <div class="flex justify-center py-2 w-1/5 text-xs">
        Trips
      </div>
      <div class="flex justify-center py-2 w-1/5 text-xs">
        Inbox
      </div>
      <div class="flex justify-center py-2 w-1/5 text-xs">
        Profile
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
};
</script>
<style>
::-webkit-scrollbar {
 height: 0px;
 width: 0px;
}
.h-fit {
  height: fit-content;
}
.bg-image {
  background-image: url('/img/bg-intro/bg-intro-320.jpg');
  min-height: 427px;
}
.text-intro {
  max-width: 12rem;
}
.carousel-card {
  min-width: 272px;
}
.carousel-exp-card {
  min-width: 330px;
}
.places-container {
  min-width: 500px;
}
.place-img {
  height: 72px;
  width: 72px;
}
@media (min-width: 500px) {
  .bg-image {
    background-image: url('/img/bg-intro/bg-intro-720.jpg');
  }
}

@media (min-width: 768px) {
  .bg-image {
    background-image: url('/img/bg-intro/bg-intro-960.jpg');
    min-height: 720px;
  }
  .carousel-card, .carousel-exp-card {
    min-width: 0;
  }
}

@media (min-width: 1024px) {
  .bg-image {
    background-image: url('/img/bg-intro/bg-intro-1200.jpg');
  }
}
</style>
