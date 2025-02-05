import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvQMrS-aDtg0htzv-nnt4IIsirDLUqp_4",
  authDomain: "fir-learning-3b2bd.firebaseapp.com",
  projectId: "fir-learning-3b2bd",
  storageBucket: "fir-learning-3b2bd.firebasestorage.app",
  messagingSenderId: "505008951962",
  appId: "1:505008951962:web:bd966d7e35ccedbd5ac523",
  measurementId: "G-918FWEGQTX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
