import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '../firebase';

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    isTrue: true,
    user: null,
  },
  getters: {
    isTrueFunction(state) {
      return state.isTrue;
    },
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    toggle(state, bool) {
      state.isTrue = bool;
    },
    setUser(state, data) {
      state.user = data;
    },
  },
  actions: {
    toggle(context) {
      const temp = !context.state.isTrue;
      firebase.database.ref('settings/setting').set(temp);
    },
    getFirebaseDatabase(context) {
      firebase.database.ref('settings/setting').on('value', (snap) => {
        context.commit('toggle', snap.val());
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
