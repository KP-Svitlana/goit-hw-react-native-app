import * as firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA6hCWfLhfo0J_yaQLsJW7NtMHn5_Fnv68",
  authDomain: "hw-rn-app2.firebaseapp.com",
  databaseURL:
    "https://hw-rn-app2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hw-rn-app2",
  storageBucket: "hw-rn-app2.appspot.com",
  messagingSenderId: "303425084348",
  appId: "1:303425084348:web:335c92f67e44b5a13da9b9",
  measurementId: "G-8MTS2E1WYK",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
