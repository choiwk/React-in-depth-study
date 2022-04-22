import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9

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

export { auth };
