import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBKSBAJZKhd1AMbXA_abV6vfwwEpbKY31o",
    authDomain: "la-franchesca-padel.firebaseapp.com",
    projectId: "la-franchesca-padel",
    storageBucket: "la-franchesca-padel.firebasestorage.app",
    messagingSenderId: "795216427554",
    appId: "1:795216427554:web:7c855c2822d68baec8287b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db