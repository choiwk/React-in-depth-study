import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCkdVw-jsP5i7WV9vBv6zgReZ2mer1R3rk',
  authDomain: 'sparta-react-f7584.firebaseapp.com',
  projectId: 'sparta-react-f7584',
  storageBucket: 'sparta-react-f7584.appspot.com',
  messagingSenderId: '725975879849',
  appId: '1:725975879849:web:190867194ad8a90d6b99b8',
  measurementId: 'G-HPCR98G1H1',
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export { auth, apiKey, firestore, storage, realtime };
