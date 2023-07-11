import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC3bTPoZ7ZT0MVvMtMD2LeTKpRpInCteIU",
  authDomain: "challenge-f1980.firebaseapp.com",
  projectId: "challenge-f1980",
  storageBucket: "challenge-f1980.appspot.com",
  messagingSenderId: "536109291111",
  appId: "1:536109291111:web:16e16aa759a7c5009266c2",
  measurementId: "G-N8YBSZCC7S"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
