<template>
  <div class="px-6 pt-3 pb-6 w-full">
    <div class="w-full rounded-xl border-gray-300 border">
      <input
        @keyup.enter="signIn"
        v-model="email"
        class="h-12 rounded-full text-sm px-3 focus:outline-none w-full"
        type="email"
        placeholder="Email"
      />
      <div class="border-gray-300 border-t w-full"></div>
      <div class="relative">
        <input
          @keyup.enter="signIn"
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
    </div>
    <p v-if="errorMessage !== ''" class="text-xs text-pink mt-1">
      <span class="text-white text-xxs bg-pink rounded-full px-2 py-1">x</span>
      {{ errorMessage }}
    </p>
    <button
      @click="signIn"
      class="focus:outline-none cursor-pointer bg-pink w-full text-white font-bold text-sm
      rounded-lg py-3 mt-2"
    >
      Log in
    </button>
    <slot></slot>
  </div>
</template>
<script>
import firebase from '@/firebase';

export default {
  name: 'Login',
  components: {
  },
  data: () => ({
    email: '',
    password: '',
    showPassword: false,
    errorMessage: '',
  }),
  methods: {
    signIn() {
      firebase.auth.signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          firebase.database.ref(`users/${res.user.uid}`).on('value', (snap) => {
            this.$store.dispatch('setCurrentUser', snap.toJSON());
            this.$emit('close');
            this.password = '';
            this.email = '';
            this.errorMessage = '';
          });
        })
        .catch((error) => {
          this.errorMessage = error.message;
        });
    },
  },
};
</script>
