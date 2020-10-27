<template>
  <div class="px-6 pt-3 pb-6 w-full">
    <div class="w-full rounded-xl border-gray-300 border">
      <input
        v-model="firstName"
        class="h-12 rounded-full text-sm px-3 focus:outline-none w-full"
        type="text"
        placeholder="First Name"
      />
      <div class="border-gray-300 border-t w-full"></div>
      <input
        v-model="lastName"
        class="h-12 text-gray-900 rounded-full text-sm px-3 focus:outline-none w-full"
        type="text"
        placeholder="Last Name"
      />
    </div>
    <p class="text-xxs text-gray-900 opacity-75 mt-1">
      Make sure it matches the name on your government ID.
    </p>
    <div class="w-full rounded-xl border-gray-300 border mt-3">
      <input
        v-model="birthdate"
        class="h-12 rounded-full text-sm px-3 focus:outline-none w-full"
        type="date"
        placeholder="Birthdate"
      />
    </div>
    <p class="text-xxs text-gray-900 opacity-75 mt-1 hidden md:block">
      To sign up, you need to be at least 18. Your birthday won't be shared with other people who
      use Airbnb.
    </p>
    <div class="w-full rounded-xl border-gray-300 border mt-3">
      <input
        v-model="email"
        class="h-12 rounded-full text-sm px-3 focus:outline-none w-full"
        type="email"
        placeholder="Email"
      />
    </div>
    <p class="text-xxs text-gray-900 opacity-75 mt-1">
      We'll email you trip confirmations and receipts.
    </p>
    <div class="w-full rounded-xl border-gray-300 border relative mt-3">
      <input
        v-model="password"
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
    <p class="text-xxs text-black opacity-75 mt-4 hidden md:block">
      By selecting
      <span class="font-bold">Agree and continue below</span>, I agree to Airbnb’s
      <span class="underline text-blue">Terms of Service</span>,
      <span class="underline text-blue">Payments Terms of Service</span>,
      <span class="underline text-blue">Privacy Policy</span>, and
      <span class="underline text-blue">Nondiscrimination Policy</span>.
    </p>
    <button
      @click="signUp"
      class="focus:outline-none cursor-pointer bg-pink w-full text-white font-bold text-sm
      rounded-lg py-3 mt-2"
    >
      Agree and Continue
    </button>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SignUp',
  components: {
  },
  data: () => ({
    showPassword: false,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthdate: '',
  }),
  methods: {
    signUp() {
      this.$store.dispatch('signUpFirebase', {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        birthdate: this.birthdate,
      });
      this.$emit('close');
    },
  },
};
</script>
