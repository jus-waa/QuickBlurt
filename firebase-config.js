// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCoMJFwhG0WJeYu_pIOEOICvcG4rXfXT4o",
  authDomain: "quick-blurt.firebaseapp.com",
  projectId: "quick-blurt",
  storageBucket: "quick-blurt.firebasestorage.app",
  messagingSenderId: "834349533962",
  appId: "1:834349533962:web:ae3fa440602e8af1d688f3",
  measurementId: "G-LSGL46VZFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the app and analytics if needed elsewhere in your app
export { app, analytics };
