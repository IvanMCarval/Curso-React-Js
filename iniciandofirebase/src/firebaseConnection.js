import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyBfLfEtsqBeStuE_OMy_Dsyf5rys428NcM",
    authDomain: "cursoreact-7a8b0.firebaseapp.com",
    projectId: "cursoreact-7a8b0",
    storageBucket: "cursoreact-7a8b0.appspot.com",
    messagingSenderId: "387545659457",
    appId: "1:387545659457:web:f51d9c0741df8517056ec0",
    measurementId: "G-NLYRJ38PW0"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;

  
  