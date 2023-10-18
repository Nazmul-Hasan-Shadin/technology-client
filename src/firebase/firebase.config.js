// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYj0PToczMHzhn8GkL0zkuzkZOFDqAYBQ",
  authDomain: "technology-electronics1.firebaseapp.com",
  projectId: "technology-electronics1",
  storageBucket: "technology-electronics1.appspot.com",
  messagingSenderId: "524527703437",
  appId: "1:524527703437:web:e34ac5bb42794d1aa119c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;