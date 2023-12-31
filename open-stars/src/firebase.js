// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD30gijdCCw6NRa5WS3bUqiKKUVXorgMPA",
  authDomain: "hackathon-bd673.firebaseapp.com",
  projectId: "hackathon-bd673",
  storageBucket: "hackathon-bd673.appspot.com",
  messagingSenderId: "548084167011",
  appId: "1:548084167011:web:5f20206b84764a71b5a356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
