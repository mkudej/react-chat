import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
firebase.initializeApp({
  apiKey: "AIzaSyC9qWwonmGmCsa_i2jqtCybdKH6PsvVqy4",
  authDomain: "chatapp-5c062.firebaseapp.com",
  projectId: "chatapp-5c062",
  storageBucket: "chatapp-5c062.appspot.com",
  messagingSenderId: "468485843459",
  appId: "1:468485843459:web:0de3456f0d8eef644b3c36",
});

export const auth = firebase.auth();
