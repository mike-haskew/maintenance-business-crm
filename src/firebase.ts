// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPZHwtoRhegkpYlchFCqlqvDJYyFKNbDc",
  authDomain: "maintenance-business-crm.firebaseapp.com",
  projectId: "maintenance-business-crm",
  storageBucket: "maintenance-business-crm.firebasestorage.app",
  messagingSenderId: "894764380652",
  appId: "1:894764380652:web:c36068ce8e86b29351d0c9",
  measurementId: "G-LZMVDZQ2WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);