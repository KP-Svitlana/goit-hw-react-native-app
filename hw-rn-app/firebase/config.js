import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import * as firebase from "firebase";
// import "firebase/auth"; //можливість авторизації
// import "firebase/storage";
// import "firebase/firestore"; // база даних після реєстрації

const firebaseConfig = {
  apiKey: "AIzaSyA6hCWfLhfo0J_yaQLsJW7NtMHn5_Fnv68",
  authDomain: "hw-rn-app2.firebaseapp.com",
  projectId: "hw-rn-app2",
  storageBucket: "hw-rn-app2.appspot.com",
  messagingSenderId: "303425084348",
  appId: "1:303425084348:web:335c92f67e44b5a13da9b9",
  measurementId: "G-8MTS2E1WYK",
};

// firebase.initializeApp(firebaseConfig);

// export default firebase;

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
