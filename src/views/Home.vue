<template>
  <div class="home">
    <div class="bg-gray-100 px-6 py-4 underline">
      <p class="font-bold sm:text-base text-xs text-center underline">
        Get the latest on our COVID-19 response
      </p>
    </div>
    <div
      class="bg-intro relative"
    >
      <div class="bg-image bg-cover bg-center h-fit"></div>
      <div class="absolute px-6 py-4 top-0 w-full">
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
    <div class="flex overflow-x-scroll py-6 px-5 max-w-screen-xl mx-auto">
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
    <div class="bg-black p-6">
      <p class="text-white text-xl font-bold">Online Experiences: Field Trips</p>
      <p class="text-white mb-3">
        Join interactive, global adventures with inspiring, kid-friendly hosts.
      </p>
      <div class="flex overflow-x-scroll py-6 max-w-screen-xl mx-auto">
        <div class="carousel-exp-card bg-gray-900 rounded-xl pb-4 mr-4">
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
        <div class="carousel-exp-card bg-gray-900 rounded-xl pb-4 mr-4">
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
        <div class="carousel-exp-card bg-gray-900 rounded-xl pb-4 mr-4">
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
        <div class="carousel-exp-card bg-gray-900 rounded-xl pb-4 mr-4">
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
      <button
        class="border border-white rounded-lg px-4 py-2 my-3 hover:bg-gray-200 focus:outline-none"
      >
        <span class="font-bold text-sm text-white">Explore all</span>
      </button>
    </div>
    <div class="px-6 pt-8 pb-2">
      <p class="text-xl font-bold">Have you made your plan to vote? Let's get #VoteReady.</p>
      <p class="opacity-75 mt-3 text-sm">
        This year more than ever, voting early is a great way to avoid lines, stay safe, and ensure
        your voice is heard. Visit Airbnb’s Civic Action Center, a one-stop resource for Election
        information, to check your voter registration and learn about all your voting options.
      </p>
      <button
        class="border border-black rounded-lg px-5 py-2 my-6 hover:bg-gray-100 focus:outline-none"
      >
        <span class="font-bold">Civic Action Center</span>
      </button>
    </div>
    <div class="pl-6 py-8">
      <p class="text-2xl font-bold">Your next escape</p>
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
    <div class="bg-gray-100 px-6 py-4 border-gray-300 border-t">
      <div class="pt-5 pb-3">
        <p class="font-bold text-sm">ABOUT</p>
        <a class="block hover:underline cursor-pointer text-sm my-3">How Airbnb works</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Newsroom</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Airbnb Plus</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Airbnb Luxe</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Hotel Tonight</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Airbnb for Work</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Olympics</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Careers</a>
      </div>
      <div class="border-gray-300 border-t"></div>
      <div class="pt-5 pb-3">
        <p class="font-bold text-sm">COMMUNITY</p>
        <a class="block hover:underline cursor-pointer text-sm my-3">Diversity & Belonging</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Against Discrimination</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Accessibility</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Airbnb Associates</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Frontline Stays</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Invite friends</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Gift Cards</a>
      </div>
      <div class="border-gray-300 border-t"></div>
      <div class="pt-5 pb-3">
        <p class="font-bold text-sm">HOST</p>
        <a class="block hover:underline cursor-pointer text-sm my-3">Host your name</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Host an Online Experience</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Host an Experience</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Responsible hosting</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Open Homes</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Resource Center</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Community Center</a>
      </div>
      <div class="border-gray-300 border-t"></div>
      <div class="pt-5 pb-3">
        <p class="font-bold text-sm">SUPPORT</p>
        <a class="block hover:underline cursor-pointer text-sm my-3">Updates for COVID-19</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Help Center</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Cancellation options</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Neighborhood Support</a>
        <a class="block hover:underline cursor-pointer text-sm my-3">Trust & Safety</a>
      </div>
      <div class="border-gray-300 border-t mb-16"></div>
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
    min-height: 903px;
  }
}

@media (min-width: 1024px) {
  .bg-image {
    background-image: url('/img/bg-intro/bg-intro-1200.jpg');
    min-height: 720px;
  }
}
</style>
