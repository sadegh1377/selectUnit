import firebase from 'firebase';
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD4wFACGmRq85LMKcunpxKa9J2uZ04Dswc",
    authDomain: "seclectsec.firebaseapp.com",
    databaseURL: "https://seclectsec.firebaseio.com",
    projectId: "seclectsec",
    storageBucket: "seclectsec.appspot.com",
    messagingSenderId: "978553091023",
    appId: "1:978553091023:web:0118a7d2f686e00c2dd8ba",
    measurementId: "G-7YF5Z09RCW",
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebaseApp.storage();
const firebaseFirestore = firebase.firestore();

export default {storage, firebaseFirestore}
