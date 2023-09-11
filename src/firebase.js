import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDAys-idYrzeuxfxyegKc61YloumU2Iczc",
  authDomain: "todo-app-bda76.firebaseapp.com",
  projectId: "todo-app-bda76",
  storageBucket: "todo-app-bda76.appspot.com",
  messagingSenderId: "367179426132",
  appId: "1:367179426132:web:2432eee70e01bf793740c1"
};


// Check if Firebase is already initialized to avoid re-initialization
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
