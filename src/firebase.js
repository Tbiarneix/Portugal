// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOLhD-yeWcrKyBwRPlzjMqBNUtqiDWwHk",
  authDomain: "portugal-6043c.firebaseapp.com",
  projectId: "portugal-6043c",
  storageBucket: "portugal-6043c.appspot.com",
  messagingSenderId: "847470698688",
  appId: "1:847470698688:web:cab3769518e28204a18d25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();