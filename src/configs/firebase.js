import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAzBI1kTlgdz84_9bwhJZMljVViZbOiNgI',
  authDomain: 'mobile-exam-42f5f.firebaseapp.com',
  projectId: 'mobile-exam-42f5f',
  storageBucket: 'mobile-exam-42f5f.appspot.com',
  messagingSenderId: '529140318623',
  appId: '1:529140318623:web:b8797f723ab440ec4bbdaa',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
