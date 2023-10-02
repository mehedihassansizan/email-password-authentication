// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABgrBYlAoLOD77axvRcqASNruS3dWn_q8",
  authDomain: "daisyui-vite-context-firebase.firebaseapp.com",
  projectId: "daisyui-vite-context-firebase",
  storageBucket: "daisyui-vite-context-firebase.appspot.com",
  messagingSenderId: "3379729950",
  appId: "1:3379729950:web:70ca6c7415598cc16ec00f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;