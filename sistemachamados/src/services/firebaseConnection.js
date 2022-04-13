import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyBQFytX2UwPb8GOi4s81IA0O-8Z9_JwImQ",
    authDomain: "sistema-68433.firebaseapp.com",
    projectId: "sistema-68433",
    storageBucket: "sistema-68433.appspot.com",
    messagingSenderId: "335978871683",
    appId: "1:335978871683:web:e30f94bd47268a09df94b6",
    measurementId: "G-VM6WE8LGQG"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
