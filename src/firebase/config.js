import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAk3tPsXEIs5hRPwL1RaI8sDutYPe_iUcw",
    authDomain: "geekstoreproducts-934c7.firebaseapp.com",
    projectId: "geekstoreproducts-934c7",
    storageBucket: "geekstoreproducts-934c7.appspot.com",
    messagingSenderId: "851069475923",
    appId: "1:851069475923:web:15052a221f349dd9acfaa6",
    measurementId: "G-SYJ02FC4RG"
};

// Inicialización de Firebase.
const app = initializeApp(firebaseConfig);

// Inicialización de la base de datos.
export const db = getFirestore(app);