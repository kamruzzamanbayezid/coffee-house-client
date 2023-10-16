// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCtrkvUoCBwnDgVVMRds-mfwX8CluSpKHU",
      authDomain: "coffee-house-50954.firebaseapp.com",
      projectId: "coffee-house-50954",
      storageBucket: "coffee-house-50954.appspot.com",
      messagingSenderId: "43504003347",
      appId: "1:43504003347:web:77551db52b5383d41bd2e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
