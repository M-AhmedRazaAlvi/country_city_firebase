import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCFynEvKT584CUbAwYq4oc0gXNX8kPtygI",
  authDomain: "country-firebase.firebaseapp.com",
  projectId: "country-firebase",
  storageBucket: "country-firebase.appspot.com",
  messagingSenderId: "44143211506",
  appId: "1:44143211506:web:c0619f960ff8bc7388f16b",
  measurementId: "G-60Y1K8BFFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};