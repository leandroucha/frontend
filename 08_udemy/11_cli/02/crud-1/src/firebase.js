import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_a3z21dZ8uhUNZseB7b2a0qC2bRp7DBc",
    authDomain: "crud-1-e8cfa.firebaseapp.com",
    databaseURL: "https://crud-1-e8cfa.firebaseio.com",
    projectId: "crud-1-e8cfa",
    storageBucket: "crud-1-e8cfa.appspot.com",
    messagingSenderId: "1056181511859",
    appId: "1:1056181511859:web:4a3a565be72e91e73472c6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {db}