import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAnqyRoal8YHpTs-a35Cgy5U9JKyZBHnzc",
  authDomain: "net-ninja-marioplan-24f61.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-24f61.firebaseio.com",
  projectId: "net-ninja-marioplan-24f61",
  storageBucket: "net-ninja-marioplan-24f61.appspot.com",
  messagingSenderId: "165801460670",
  appId: "1:165801460670:web:437ffb878ffcfc13dd2fef"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase;

