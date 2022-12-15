// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Constants from 'expo-constants';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: Constants.expoConfig?.extra?.apiKey,
  // authDomain: Constants.expoConfig?.extra?.authDomain,
  // projectId: Constants.expoConfig?.extra?.projectId,
  // storageBucket: Constants.expoConfig?.extra?.storageBucket,
  // messagingSenderId: Constants.expoConfig?.extra?.messagingSenderId,
  // appId: Constants.expoConfig?.extra?.appId,
  // measurementId: Constants.expoConfig?.extra?.measurementId,
  apiKey: "AIzaSyBbwFbOVFf4k0NkT9ysdMKYn6YvPfzRUHQ",
  authDomain: "ebook-4f683.firebaseapp.com",
  projectId: "ebook-4f683",
  storageBucket: "ebook-4f683.appspot.com",
  messagingSenderId: "674822306565",
  appId: "1:674822306565:web:28aeb1325b25bc961ed56c",
  measurementId: "G-T783H587RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);