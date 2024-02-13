// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6LliWMXKAt1YM0Pk6_RdDHqhuwya0yvY",
  authDomain: "company-portal-c8593.firebaseapp.com",
  projectId: "company-portal-c8593",
  storageBucket: "company-portal-c8593.appspot.com",
  messagingSenderId: "256312942859",
  appId: "1:256312942859:web:85cef5cfe9fdc17814020e",
  measurementId: "G-KZPLK36NKG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };