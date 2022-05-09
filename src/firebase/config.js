// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQY_ea7o693aFjfuZk6pMHKDlJITuGLT4",
  authDomain: "habit-tracker-18ac8.firebaseapp.com",
  projectId: "habit-tracker-18ac8",
  storageBucket: "habit-tracker-18ac8.appspot.com",
  messagingSenderId: "226539883976",
  appId: "1:226539883976:web:fd8fc2e333741cf22504fd",
  measurementId: "G-ZQSN8V15XF",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);

export { database, auth };
