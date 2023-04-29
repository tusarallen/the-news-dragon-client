// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log("environment variable", import.meta.env.VITE_apiKey);
const firebaseConfig = {
  apiKey: "AIzaSyDvH_6Kgk2unNR2x-I8gFO2__cGf5A8n-Q",
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
