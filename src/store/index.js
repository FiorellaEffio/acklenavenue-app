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
    signInFirebase(context, data) {
      console.log('vuex action');
      firebase.auth.signInWithEmailAndPassword(data.email, data.password)
        .then((user) => {
          context.commit('setUser', user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
  },
});
