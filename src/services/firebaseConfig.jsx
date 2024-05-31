import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs9-rkPGRwYWcqDi7_L1Bwr0V5-aoHSLg",
  authDomain: "tela-de-cadastro---jay.firebaseapp.com",
  projectId: "tela-de-cadastro---jay",
  storageBucket: "tela-de-cadastro---jay.appspot.com",
  messagingSenderId: "718690457726",
  appId: "1:718690457726:web:9980ec6bb8e8d94ab6202f",
  measurementId: "G-KY0HFDRQP3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);