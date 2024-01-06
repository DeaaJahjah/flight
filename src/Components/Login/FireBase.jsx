import React from 'react'
 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";

   
 const firebaseConfig = {
  apiKey: "AIzaSyCha9zLEMD6P77WUtnkCQDZl244sM1Ct90",
  authDomain: "airport-44e70.firebaseapp.com",
  projectId: "airport-44e70",
  storageBucket: "airport-44e70.appspot.com",
  messagingSenderId: "584712171881",
  appId: "1:584712171881:web:c74343bdcbcc1b0bc28df8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth() ;

export {app,auth}
