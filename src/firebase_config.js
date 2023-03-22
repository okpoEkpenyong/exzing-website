// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0fp-3JJblJgEZYuK0OCpAHmXdB1Mluoo",
  authDomain: "exzingdb.firebaseapp.com",
  databaseURL: "https://exzingdb-default-rtdb.firebaseio.com",
  projectId: "exzingdb",
  storageBucket: "exzingdb.appspot.com",
  messagingSenderId: "478816800318",
  appId: "1:478816800318:web:af95a9b473d45d5740cb6f",
};

export const app = initializeApp(firebaseConfig);
