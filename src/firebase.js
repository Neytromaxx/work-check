import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyDDFSPzmsqIzNhRttfshLBHJBh8IMnwH_4",
  authDomain: "work-check-a768e.firebaseapp.com",
  projectId: "work-check-a768e",
  storageBucket: "work-check-a768e.firebasestorage.app",
  messagingSenderId: "420004824349",
  appId: "1:420004824349:web:8d64605d1bdf985ed4cdf4",
  measurementId: "G-J38H3WMZ95"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const db  = getFirestore();

export{ analytics, auth, db}