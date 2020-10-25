import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '../firebase';

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    isTrue: true,
  },
  getters: {
    isTrueFunction(state) {
      return state.isTrue;
    },
  },
  mutations: {
    toogle(state, bool) {
      state.isTrue = bool;
    },
  },
  actions: {
    getFirebaseDatabase(context) {
      firebase.database.ref('settings/setting').on('value', (snap) => {
        console.log('toogle value firebase');
        console.log(snap.val());
        context.commit('toogle', snap.val());
      });
    },
  },
  modules: {
  },
});
