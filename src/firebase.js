import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB703V0MEHXxOvY7kUFMaF9SEfuzcxaPrk',
  authDomain: 'acklenavenue-app.firebaseapp.com',
  databaseURL: 'https://acklenavenue-app.firebaseio.com',
  projectId: 'acklenavenue-app',
  storageBucket: 'acklenavenue-app.appspot.com',
  messagingSenderId: '1029775235748',
  appId: '1:1029775235748:web:4c9587a856ea2df7682431',
  measurementId: 'G-2WCNNVHK11',
};

firebase.initializeApp(firebaseConfig);

export default {
  database: firebase.database(),
};
