<template>
  <div class="px-6 pt-3 pb-6 w-full">
    <div
      :class="[ firstNameErrors.length !== 0 ? 'border-pink' : 'border-gray-300']"
      class="relative w-full rounded-xl border-gray-300 border mb-2"
    >
      <input
        v-model="firstName"
        class="h-12 rounded-full text-sm px-3 focus:outline-none w-full"
        type="text"
        placeholder="First Name"
      />
      <span
        v-if="firstNameErrors.length !== 0"
        class="text-xxs absolute top-0 text-pink bg-white left-0 -mt-2 ml-4 px-1"
      >
        {{ firstNameErrors.join(', ') }}
      </span>
    </div>
    <div
      :class="[ lastNameErrors.length !== 0 ? 'border-pink' : 'border-gray-300']"
      class="relative w-full rounded-xl border-gray-300 border">
      <input
        v-model="lastName"
        class="h-12 text-gray-900 rounded-full text-sm px-3 focus:outline-none w-full"
        type="text"
        placeholder="Last Name"
      />
      <span
        v-if="lastNameErrors.length !== 0"
        class="text-xxs absolute top-0 text-pink bg-white left-0 -mt-2 ml-4 px-1"
      >
        {{ lastNameErrors.join(', ') }}
      </span>
    </div>
    <p class="text-xxs text-gray-900 opacity-75 mt-1">
      Make sure it matches the name on your government ID.
    </p>
    <div
      :class="[ emailErrors.length !== 0 ? 'border-pink' : 'border-gray-300']"
      class="relative w-full rounded-xl border mt-3"
    >
      <input
        v-model="email"
        class="h-12 rounded-full text-sm px-3 focus:outline-none w-full"
        type="email"
        placeholder="Email"
      />
      <span
        v-if="emailErrors.length !== 0"
        class="text-xxs absolute top-0 text-pink bg-white left-0 -mt-2 ml-4 px-1"
      >
        {{ emailErrors.join(', ') }}
      </span>
    </div>
    <p class="text-xxs text-gray-900 opacity-75 mt-1">
      We'll email you trip confirmations and receipts.
    </p>
    <div
      :class="[ passwordSuggestions.length !== 0 ? 'border-pink' : 'border-gray-300']"
      class="relative w-full rounded-xl border-gray-300 border relative mt-3"
    >
      <input
        v-model="password"
        class="h-12 text-gray-900 rounded-full text-sm px-3 focus:outline-none w-full"
        :type="showPassword ? 'text' : 'password'"
        placeholder="Password"
      />
      <span
        v-if="passwordSuggestions.length !== 0"
        class="leading-tight text-xxs absolute top-0 text-pink bg-white left-0 -mt-2 ml-4 px-1"
      >
        Should {{ passwordSuggestions.join(', ') }}
      </span>
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
      :disabled="signUpDisabled"
      @click="signUp"
      :class="[ signUpDisabled ? 'opacity-25 cursor-default' : 'cursor-pointer' ]"
      class="focus:outline-none w-full bg-pink text-white font-bold text-sm rounded-lg py-3 mt-2"
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
    emailRegex: /\S+@\S+\.\S+/,
  }),
  computed: {
    emailErrors() {
      const errors = [];
      if (this.email === '') return errors;
      if (!this.emailRegex.test(this.email)) {
        errors.push('Email no valid');
      }
      return errors;
    },
    firstNameErrors() {
      const errors = [];
      if (this.firstName === '') return errors;
      if (this.firstName.trim().length === 0) {
        errors.push("First Name can't be empty");
      }
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (this.lastName === '') return errors;
      if (this.lastName.trim().length === 0) {
        errors.push("Last Name can't be empty");
      }
      return errors;
    },
    passwordSuggestions() {
      const suggestions = [];
      if (this.password === '') return suggestions;
      if (this.password.length < 8) suggestions.push('at least 8 characters');
      if (!(/\d/.test(this.password))) suggestions.push('contain a number');
      if (/[a-zA-Z]/g.test(this.password) && this.password === this.password.toLowerCase()) {
        suggestions.push('contain an uppercase letter');
      }
      return suggestions;
    },
    signUpDisabled() {
      if (this.password !== '' && this.email !== '' && this.firstName !== '' && this.lastName !== '') {
        if (this.firstNameErrors.length === 0 && this.lastNameErrors.length === 0
        && this.emailErrors.length === 0 && this.passwordSuggestions.length === 0) {
          return false;
        }
        return true;
      }
      return true;
    },
  },
  methods: {
    signUp() {
      this.$store.dispatch('signUpFirebase', {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
      });
      this.$emit('close');
      this.password = '';
      this.email = '';
      this.firstName = '';
      this.lastName = '';
    },
  },
};
</script>
