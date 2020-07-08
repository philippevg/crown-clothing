import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC8HChtbWDGUjQxXcx9wtwcHs9JsAncdpw",
    authDomain: "crown-db-46e4f.firebaseapp.com",
    databaseURL: "https://crown-db-46e4f.firebaseio.com",
    projectId: "crown-db-46e4f",
    storageBucket: "crown-db-46e4f.appspot.com",
    messagingSenderId: "1029487503113",
    appId: "1:1029487503113:web:38c14e72a7deafd03bd5d8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;