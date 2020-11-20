import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdfTjFrvZ5-alMAyUwe-K1OA2nKHrJHDQ",
  authDomain: "insta-clone-12731.firebaseapp.com",
  databaseURL: "https://insta-clone-12731.firebaseio.com",
  projectId: "insta-clone-12731",
  storageBucket: "insta-clone-12731.appspot.com",
  messagingSenderId: "628731126995",
  appId: "1:628731126995:web:bd0a0b99806d9be5f76026",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage, firebase };
