import * as firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD6s9_UHezzCpOWTin0CmRm8My0tA9MpHQ",
  authDomain: "hw-rn-app.firebaseapp.com",
  databaseURL: "https://hw-rn-app-default-rtdb.firebaseio.com",
  projectId: "hw-rn-app",
  storageBucket: "hw-rn-app.appspot.com",
  messagingSenderId: "585516878629",
  appId: "1:585516878629:android:4c4eb1299b27b9c86528cc",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
