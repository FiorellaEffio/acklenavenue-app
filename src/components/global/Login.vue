<template>
  <div class="px-6 pt-3 pb-6 w-full">
    <div class="w-full rounded-xl border-gray-300 border">
      <input
        class="h-12 rounded-full text-sm px-3 focus:outline-none w-full"
        type="text"
        placeholder="Email"
      />
      <div class="border-gray-300 border-t w-full"></div>
      <div class="relative">
        <input
            class="h-12 text-gray-900 rounded-full text-sm px-3 focus:outline-none w-full"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
        />
        <span
          @click="showPassword = !showPassword"
          class="cursor-pointer underline text-xs absolute right-0 top-0 mt-4 mr-3"
        >
          {{ showPassword ? 'Hide' : 'Show' }}
        </span>
      </div>
    </div>
    <button
      class="focus:outline-none cursor-pointer bg-pink w-full text-white font-bold text-sm
      rounded-lg py-3 mt-2"
    >
      Log in
    </button>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Login',
  components: {
  },
  data: () => ({
    showPassword: false,
  }),
};
</script>
