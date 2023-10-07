import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAPDbNnhgU3IjzxZMyf6R_sxfcQbVTGyog",
    authDomain: "sponsorportal-aa2ae.firebaseapp.com",
    projectId: "sponsorportal-aa2ae",
    storageBucket: "sponsorportal-aa2ae.appspot.com",
    messagingSenderId: "684456854522",
    appId: "1:684456854522:web:46b4817ffab5b484a21a43",
    databaseURL: "https://sponsorportal-aa2ae-default-rtdb.europe-west1.firebasedatabase.app/",
  };
  
  const config = initializeApp(firebaseConfig);
  export {config};

