import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '../firebase';

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    user: null,
    userStays: null,
    stays: null,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getStays(state) {
      return state.stays;
    },
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
    setStays(state, data) {
      state.stays = data;
    },
  },
  actions: {
    // toggle(context) {
    //   const temp = !context.state.isTrue;
    //   firebase.database.ref('settings/setting').set(temp);
    // },
    getStays(context) {
      firebase.database.ref('stays').on('value', (snap) => {
        console.log('blabla');
        console.log(snap.toJSON());
        context.commit('setStays', snap.toJSON());
      });
    },
    setCurrentUser(context) {
      firebase.auth.onAuthStateChanged((data) => {
        if (data) {
          context.commit('setUser', data);
        } else {
          context.commit('setUser', null);
        }
      });
    },
    signInFirebase(context, data) {
      firebase.auth.signInWithEmailAndPassword(data.email, data.password)
        .then((res) => {
          context.commit('setUser', res.user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signOutFirebase(context) {
      firebase.auth.signOut().then(() => {
        context.commit('setUser', null);
      }).catch((error) => {
        console.log("can't sign out", error);
      });
    },
    signUpFirebase(context, data) {
      firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
  },
  modules: {
  },
});
