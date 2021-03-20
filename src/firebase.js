// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDNOJWdKpfu44s2CUfYvYEr3kDsKlEkHoU",
  authDomain: "clone-c04c9.firebaseapp.com",
  projectId: "clone-c04c9",
  storageBucket: "clone-c04c9.appspot.com",
  messagingSenderId: "674508495502",
  appId: "1:674508495502:web:3849149cbecf56ac6707df",
  measurementId: "G-YJ80JER6BP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
