import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBvM2fE9eZ89LEZdRevsbkb0hP9WV4X9A4',
  authDomain: 'hotstar-bf017.firebaseapp.com',
  projectId: 'hotstar-bf017',
  storageBucket: 'hotstar-bf017.appspot.com',
  messagingSenderId: '255224969335',
  appId: '1:255224969335:web:e214077f4b51387c042e72',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
