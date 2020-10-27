import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import StayUserList from '../views/StayUserList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/trips',
    name: 'StayUserList',
    component: StayUserList,
    meta: {
      userAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser;
  const auth = to.matched.some((record) => record.meta.userAuth);
  if (auth && !user) {
    next('/');
  } else if (!auth && user) {
    next();
  } else {
    next();
  }
});

export default router;
