import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMoBoVzX28eY5-vFF2HD6Uwizf6DYkGAI",
  authDomain: "linkedin-clone-b5a45.firebaseapp.com",
  projectId: "linkedin-clone-b5a45",
  storageBucket: "linkedin-clone-b5a45.appspot.com",
  messagingSenderId: "87249170463",
  appId: "1:87249170463:web:01a21378e36d5cf2fa252a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
