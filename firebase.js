// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getDatabase, set, ref, onValue } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANCU5TLFbXBhX98YMq0N2cHOzKk0Z6rbQ",
  authDomain: "sub-to-do.firebaseapp.com",
  projectId: "sub-to-do",
  storageBucket: "sub-to-do.appspot.com",
  messagingSenderId: "203787076913",
  appId: "1:203787076913:web:9c2a56c51671c96ddadc10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);




export{
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, db, ref, set
}