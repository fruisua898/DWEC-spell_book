import app from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyDHFGFon40JdcW0WMxA1mpBEG_1H_eq4ns",

  authDomain: "spellbook-a68cd.firebaseapp.com",

  projectId: "spellbook-a68cd",

  storageBucket: "spellbook-a68cd.appspot.com",

  messagingSenderId: "676973349481",

  appId: "1:676973349481:web:2965bffc4d4f13189370f8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {db, auth};