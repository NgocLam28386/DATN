import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyDo5iA76Nd7e2_o6Yr16kJvZPmZYqmhY9c",
  authDomain: "datn-659ae.firebaseapp.com",
  projectId: "datn-659ae",
  storageBucket: "datn-659ae.firebasestorage.app",
  messagingSenderId: "696118384833",
  appId: "1:696118384833:web:3806e8ed6ea86b20265c40",
  measurementId: "G-VHG84C0WV8"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig)
export default firebase;
export const authentication = getAuth(initializeApp(firebaseConfig))