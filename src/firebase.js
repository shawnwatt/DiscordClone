// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuf-KdQe2y7T_F_94TmaJX8CZKr8cBYiQ",
  authDomain: "discord-4b731.firebaseapp.com",
  databaseURL: "https://discord-4b731.firebaseio.com",
  projectId: "discord-4b731",
  storageBucket: "discord-4b731.appspot.com",
  messagingSenderId: "905428354823",
  appId: "1:905428354823:web:2e5cfa5181faa286d867a2",
  measurementId: "G-7SYDE1178H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
