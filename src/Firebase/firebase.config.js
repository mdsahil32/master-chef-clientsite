// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSdzu6vA4vhJTiJaZ9e3ANr6bugRRSZ4o",
  authDomain: "grand-master-chef.firebaseapp.com",
  projectId: "grand-master-chef",
  storageBucket: "grand-master-chef.appspot.com",
  messagingSenderId: "729043921843",
  appId: "1:729043921843:web:d8f6b568202bc2922179c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;