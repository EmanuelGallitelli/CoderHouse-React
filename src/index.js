import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Assets/index.css';
import App from './App';



 import { initializeApp } from "firebase/app";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyBJzS51SIOwWTTuFpIBs7y-ocbAhHX3yQA",

    authDomain: "test-app-1bfde.firebaseapp.com",

    projectId: "test-app-1bfde",

    storageBucket: "test-app-1bfde.appspot.com",

    messagingSenderId: "462147695358",

    appId: "1:462147695358:web:e6354417a5976f86366baf"

  };


 const app =  initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);






