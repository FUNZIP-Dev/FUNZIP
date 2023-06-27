// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const {
  VITE_APP_API_KEY,
  VITE_APP_AUTH_DOMAIN,
  VITE_APP_PROJECT_ID,
  VITE_APP_STORAGE_BUKET,
  VITE_APP_MESSAGING_SENDER_ID,
  VITE_APP_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_APP_API_KEY,
  authDomain: VITE_APP_AUTH_DOMAIN,
  projectId: VITE_APP_PROJECT_ID,
  storageBucket: VITE_APP_STORAGE_BUKET,
  messagingSenderId: VITE_APP_MESSAGING_SENDER_ID,
  appId: VITE_APP_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);

// firestore 공유
export const dbService = getFirestore();

// storage 공유
export const storageService = getStorage();
