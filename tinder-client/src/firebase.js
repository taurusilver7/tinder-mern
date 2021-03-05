import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfEE5Ty4vYMFk3GYKKM4wrxlegogDi--k",
  authDomain: "tinder-ae182.firebaseapp.com",
  projectId: "tinder-ae182",
  storageBucket: "tinder-ae182.appspot.com",
  messagingSenderId: "585091480964",
  appId: "1:585091480964:web:d73042e60c12d65b8ab1d1",
  measurementId: "G-ZDFHR3WEWM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// real-time database for google.
const db = firebaseApp.firestore();


export default db;
