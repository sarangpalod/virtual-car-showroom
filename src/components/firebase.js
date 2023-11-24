import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAba_cax0Efg_SPHEbJUu9jMXJH_s8yP5k",
  authDomain: "project539-2.firebaseapp.com",
  projectId: "project539-2",
  storageBucket: "project539-2.appspot.com",
  messagingSenderId: "795104127503",
  appId: "1:795104127503:web:76c2b0284ee0ce243d917a",
  measurementId: "G-ZLYRVV4W8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
