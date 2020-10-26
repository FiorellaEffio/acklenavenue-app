<template>
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
        <p class="opacity-75 mt-3 text-sm lg:w-1/2 lg:text-lg lg:leading-7 lg:opacity-100 lg:mx-3">
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
</template>
<script>
export default {
  name: 'CivicAction',
  components: {
  },
};
</script>
