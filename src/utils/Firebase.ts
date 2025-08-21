import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBVb87J8ZJBixeqRetuGlKJGtI-5WCQR_s",
  authDomain: "personal-care-shop.firebaseapp.com",
  projectId: "personal-care-shop",
  storageBucket: "personal-care-shop.firebasestorage.app",
  messagingSenderId: "160636029177",
  appId: "1:160636029177:web:5ecd63cac5b0c8cfde7a28",
  measurementId: "G-VJNPW0DQJ2"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app , "gs://socialapp-9b83f.appspot.com");
