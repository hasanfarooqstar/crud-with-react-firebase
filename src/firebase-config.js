import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0qGwUo_wvuiwFw1NAlzFzu4zIyIml8dY",
  authDomain: "crud-with-react-firebase.firebaseapp.com",
  projectId: "crud-with-react-firebase",
  storageBucket: "crud-with-react-firebase.appspot.com",
  messagingSenderId: "682590984909",
  appId: "1:682590984909:web:56b5c8d54be864958f2784",
  measurementId: "G-ESBYE4EFLM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
