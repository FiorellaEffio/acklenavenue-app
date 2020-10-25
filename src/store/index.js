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
    toggle(state, bool) {
      state.isTrue = bool;
    },
  },
  actions: {
    toggle(context) {
      const temp = !context.state.isTrue;
      firebase.database.ref('settings/setting').set(temp);
    },
    getFirebaseDatabase(context) {
      firebase.database.ref('settings/setting').on('value', (snap) => {
        console.log('toggle value firebase');
        console.log(snap.val());
        context.commit('toggle', snap.val());
      });
    },
  },
  modules: {
  },
});
